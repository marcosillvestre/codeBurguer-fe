/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import codeBurguer from '../../assets/burger2.svg';
import burguer from '../../assets/cdBurguer.svg';
import { Button } from '../../components';
import { useUser } from '../../hooks/UserContext';
import api from '../../services/api';
import {
  Container,
  ContainerItens, Input, Label, MessageError, P, SignInParag
} from './styles';

export function Login() {

  const history = useHistory()

  const { putInfo } = useUser()

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
        .required()
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
  const onSubmit = async User => {
    const { data } = await toast.promise(
      api.post('sessions', {
        email: User.Email,
        password: User.password
      }),
      {
        pending: 'Conferindo os dados',
        success: 'Login efetuado com sucesso',
        error: 'Alguma coisa deu errado, confira seus dados'
      }

    )

    putInfo({ data })
    const isAdmin = data && data.admins

    setInterval(() => {
      isAdmin ? history.push('/admin') : history.push('/')

    }, 2000);

  }

  return (
    <Container>
      <div>
        <img src={burguer} />
      </div>
      <ContainerItens>
        <div>
          <img src={codeBurguer} />
        </div>
        <P>Login</P>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>

          <Input
            validIpnut={errors.Email?.message}
            type="email"
            {...register('Email')}
          />
          <MessageError>{errors.Email?.message}</MessageError>

          <Label>Senha</Label>

          <Input
            validIpnut={errors.password?.message}
            type={eyeChange ? 'text' : 'Password'}
            {...register('password')}
          />
          <MessageError>{errors.password?.message}</MessageError>

          <Button type="submit" style={{ position: 'relative', top: '1em' }}>
            Sign In
          </Button>
        </form>

        <button className="btnEye" onClick={handlebutton}>
          {eyeChange ? (
            <AiOutlineEye className="btnEye" />
          ) : (
            <AiOutlineEyeInvisible className="btnEye" />
          )}
        </button>

        <SignInParag>
          Não possui conta ? <Link to={'/cadastro'} style={{ color: 'white' }}>Sign Up</Link>
        </SignInParag>

      </ContainerItens>
    </Container>
  )
}

