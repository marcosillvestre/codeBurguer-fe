/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { yupResolver } from '@hookform/resolvers/yup';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import * as Yup from 'yup';

import { ErrorMessage } from '../../../components';
import allPaths from '../../../constants/paths';
import apiCodeB from '../../../services/api';
import { ButtonProducts, Container, ContainerItens, Input, Label, LabelUpload, SelectCategory } from './styles';


function EditProducts() {
    const [fileName, setfileName] = useState(false)
    const [categories, setCategories] = useState({})
    const { push, location: { state: { product } } } = useHistory()
    console.log(product)

    const schema = Yup
        .object({
            name:
                Yup.string()
                    .required('Nome do produto é obrigatório'),
            price:
                Yup.string()
                    .required('O valor do produto é obrigatório'),
            category:
                Yup.object()
                    .required('A categoria é obrigatória'),
        })

    const { register, handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async data => {
        const everyRequest = new FormData()

        everyRequest.append('name', data.name)
        everyRequest.append('price', data.price)
        everyRequest.append('offer', data.offer)
        everyRequest.append('category_id', data.category.id)

        await toast.promise(apiCodeB.put(`products/${product.id}`, everyRequest), {
            pending: 'Editando o seu produto',
            success: 'Produto editado com sucesso',
            error: 'Falha ao editar produto'
        })

        setTimeout(() => {
            push(allPaths.listProducts)
        }, 2000)
    }



    async function getCategories() {
        const { data } = await apiCodeB.get('categories')
        setCategories(data)
    }

    const { isFetching } = useQuery('Categories', () => getCategories(),
        {
            staleTime: 60000,
        })


    return (

        <Container>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <ContainerItens>
                    <Label style={{ textAlign: "center", fontSize: "20px" }}> Editar </Label>
                    <Label>Nome</Label>
                    <Input
                        type="text"
                        {...register("name")}
                        validIpnut={errors.name?.message}
                        defaultValue={product.name} />
                    <ErrorMessage >{errors.name?.message}</ErrorMessage>

                    <Label>Preço</Label>
                    <Input
                        type="number"
                        {...register("price")}
                        validIpnut={errors.price?.message}
                        defaultValue={product.price}
                    />
                    <ErrorMessage >{errors.price?.message}</ErrorMessage>


                    <LabelUpload>
                        {fileName || <> <CloudUploadIcon /> Upload de imagem </>}
                        <Input
                            validIpnut={errors.file?.message}
                            type="file"
                            id='image-input'
                            accept='image/jpeg, image/png'
                            {...register("file")}
                            onChange={value => { setfileName(value.target.files[0].name) }}
                        />
                    </LabelUpload>
                    <ErrorMessage >{errors.file?.message}</ErrorMessage>


                    <Controller
                        name="category"
                        control={control}
                        defaultValue={product.category}
                        render={({ field }) => {
                            return (
                                <SelectCategory
                                    {...field}
                                    options={categories || isFetching && <p>Carregando...</p>}
                                    getOptionLabel={cat => cat.name}
                                    getOptionValue={cat => cat.id}
                                    placeholder="Categorias"
                                    defaultValue={product.category}
                                />
                            )
                        }}

                    ></Controller>
                    <ErrorMessage >{errors.category?.message}</ErrorMessage>

                    <Label style={{ display: 'flex', gap: '10px' }}>
                        <input defaultChecked={product.offer} type='checkbox' {...register("offer")} />
                        Produto em oferta ?
                    </Label>

                    <ButtonProducts type="submit"> Salvar Produto</ButtonProducts>

                </ContainerItens>
            </form>
        </Container >

    )
}

export default EditProducts