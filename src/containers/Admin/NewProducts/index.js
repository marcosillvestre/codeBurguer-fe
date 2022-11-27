/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useQuery } from 'react-query';

import { yupResolver } from '@hookform/resolvers/yup';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import * as Yup from 'yup';

import { ErrorMessage } from '../../../components';
import apiCodeB from '../../../services/api';
import { ButtonProducts, Container, ContainerItens, Input, Label, LabelUpload, SelectCategory } from './styles';


function NewProducts() {
    const [fileName, setfileName] = useState(false)
    const [categories, setCategories] = useState({})

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
            file:
                Yup.mixed()
                    .test('required', 'Envie um arquivo', value => {
                        return value && value.length > 0
                    })
                    .test('fileSize', 'Envie arquivos de no maximo 2mb', value => {
                        return value && value[0].size <= 200000
                    })
        })

    const { register, handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = data => console.log(data);


    async function postOrders() {
        await apiCodeB.post('products')
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
                    <Label>Nome</Label>
                    <Input type="text" {...register("name")} />
                    <ErrorMessage >{errors.name?.message}</ErrorMessage>

                    <Label>Preço</Label>
                    <Input type="number" {...register("price")} />
                    <ErrorMessage >{errors.price?.message}</ErrorMessage>


                    <LabelUpload>
                        {fileName || <> <CloudUploadIcon /> Upload de imagem </>}
                        <Input type="file"
                            accept='image/jpeg, image/png'
                            {...register("file")}
                            onChange={value => { setfileName(value.target.files[0].name) }}
                        />
                    </LabelUpload>
                    <ErrorMessage >{errors.file?.message}</ErrorMessage>


                    <Controller
                        name="category"
                        control={control}
                        render={({ field }) => {
                            return (
                                <SelectCategory
                                    {...field}
                                    options={categories || isFetching && <p>Carregando...</p>}
                                    getOptionLabel={cat => cat.name}
                                    getOptionValue={cat => cat.id}
                                    placeholder="Categorias"
                                />
                            )
                        }}

                    ></Controller>
                    <ErrorMessage >{errors.category?.message}</ErrorMessage>

                    <ButtonProducts type="submit"> Adicionar novo Produto</ButtonProducts>

                </ContainerItens>
            </form>
        </Container >

    )
}

export default NewProducts