/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { toast } from 'react-toastify';

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import codeBurguer from '../../assets/burger2.svg'
import logBurguer from '../../assets/signUpbg.svg'
import Button from '../../components/Button'
import api from '../../services/api'
import {
  Container,
  ContainerItens,
  P,
  Label,
  Input,
  MessageError,
  SignInParag
} from './styles'

function Login() {
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
      console.log(status)

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
  console.log(errors)

  return (
    <Container>
      <img src={logBurguer} style={{ height: '53em' }} />

      <ContainerItens>
        <img src={codeBurguer} style={{ height: '7em' }} />

        <P>Cadastre-se</P>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>

          <Label>Nome</Label>
          <Input
            validIpnut={errors.Name?.message}
            type="text"
            {...register('Name')}
          />
          <MessageError>{errors.Name?.message}</MessageError>


          <Label>Email</Label>
          <Input
            validIpnut={errors.Email?.message}
            type="email"
            {...register('Email')} />
          <MessageError>{errors.Email?.message}</MessageError>


          <Label>Senha</Label>
          <Input
            validIpnut={errors.password?.message}
            type={eyeChange ? 'text' : 'Password'}
            {...register('password')} />
          <MessageError>{errors.password?.message}</MessageError>



          <Label>Confirmar senha</Label>

          <Input
            validIpnut={errors.passwordConfirm?.message}
            type={eyeChange ? 'text' : 'Password'}
            {...register('passwordConfirm')}
          />
          <MessageError>{errors.passwordConfirm?.message}</MessageError>


          <Button type="submit" style={{ position: 'relative', top: '1em' }}>
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
          Não possui conta ? <a>Sign in</a>
        </SignInParag>
      </ContainerItens>
    </Container>
  )
}

export default Login
