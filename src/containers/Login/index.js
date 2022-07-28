/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import codeBurguer from '../../assets/burger2.svg'
import burguer from '../../assets/cdBurguer.svg'
import {
  Container,
  ContainerItens,
  P,
  Label,
  Input,
  Button,
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
      Email: yup
        .string()
        .required('O email é obrigatório')
        .email('Digite um email válido'),
      password: yup
        .string()
        .required('O email é obrigatório')
        .min(6, 'A senha deve ter no minimo 6 digítos')
    })
    .required()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = data => {}

  return (
    <Container>
      <img src={burguer} />

      <ContainerItens>
        <img src={codeBurguer} />
        <P>Login</P>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>

          <Input
            validIpnut={errors.Email?.message}
            type="email"
            {...register('Email')}
          />
          <MessageError>{errors.Email?.message}</MessageError>

          <Label>
            Senha
            <button className="btnEye" onClick={handlebutton}>
              {eyeChange ? (
                <AiOutlineEye className="btnEye" />
              ) : (
                <AiOutlineEyeInvisible className="btnEye" />
              )}
            </button>
          </Label>

          <Input
            validIpnut={errors.password?.message}
            type={eyeChange ? 'text' : 'Password'}
            {...register('password')}
          />
          <MessageError>{errors.password?.message}</MessageError>

          <Button type="submit">Sign In</Button>
        </form>
        <SignInParag>
          Não possui conta ? <a>Sign Up</a>
        </SignInParag>
      </ContainerItens>
    </Container>
  )
}

export default Login
