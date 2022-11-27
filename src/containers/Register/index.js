/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import codeBurguer from '../../assets/burger2.svg';
import logBurguer from '../../assets/signUpbg.svg';
import { Button, ErrorMessage } from '../../components';
import api from '../../services/api';
import {
  Container,
  ContainerItens, Input, Label, P, SignInParag
} from './styles';

export function Register() {
  const [eyeChange, setEyeChange] = useState(false)
  const handlebutton = () => {
    setEyeChange(state => !state)
  }

  const schema = yup
    .object({
      Name: yup
        .string()
        .required('Nome é obrigatório'),
      Email: yup
        .string()
        .required('O email é obrigatório')
        .email('Digite um email válido'),
      password: yup
        .string()
        .required('A senha é obrigatória')
        .min(6, 'A senha deve conter no minimo 6 digítos'),
      passwordConfirm: yup
        .string()
        .required('A senha é obrigatória')
        .oneOf([yup.ref('password')], 'As duas senhas devem ser iguais')
    })


  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = async data => {
    try {
      const { status } = await api.post('users', {
        name: data.Name,
        email: data.Email,
        password: data.password,
        passwordConfirm: data.passwordConfirm
      }, { validateStatus: () => true })

      if (status === 200 || status === 201) {
        toast.success('Cadastro efetuado com sucesso')
      }
      else if (status === 409) {
        toast.error('Esse usuário já existe')
      }
      else {
        throw new Error()
      }

    } catch (error) {
      toast.error('there´s something wrong')

    }


  }

  return (
    <Container>
      <div>
        <img src={logBurguer} style={{ height: '42em' }} />
      </div>
      <ContainerItens>
        <img src={codeBurguer} style={{ height: '7em' }} />

        <P>Cadastre-se</P>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>

          <Label>Primeiro nome</Label>
          <Input
            validIpnut={errors.Name?.message}
            type="text"
            {...register('Name')}
          />
          <ErrorMessage>{errors.Name?.message}</ErrorMessage>


          <Label>Email</Label>
          <Input
            validIpnut={errors.Email?.message}
            type="email"
            {...register('Email')} />
          <ErrorMessage>{errors.Email?.message}</ErrorMessage>


          <Label>Senha</Label>
          <Input
            validIpnut={errors.password?.message}
            type={eyeChange ? 'text' : 'Password'}
            {...register('password')} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>



          <Label>Confirmar senha</Label>

          <Input
            validIpnut={errors.passwordConfirm?.message}
            type={eyeChange ? 'text' : 'Password'}
            {...register('passwordConfirm')}
          />
          <ErrorMessage>{errors.passwordConfirm?.message}</ErrorMessage>


          <Button type="submit" style={{ position: 'relative', top: '0.1em' }}>
            Sign In
          </Button>
        </form>

        <button error={errors.password?.message} className="btnEye" onClick={handlebutton}>
          {eyeChange ? (
            <AiOutlineEye className="btnEye" />
          ) : (
            <AiOutlineEyeInvisible className="btnEye" />
          )}
        </button>

        <SignInParag style={{ marginTop: '15px' }}>
          Já possui conta ? <Link to={'/login'} style={{ color: 'white' }}>Sign in</Link>
        </SignInParag>
      </ContainerItens>
    </Container>
  )
}

