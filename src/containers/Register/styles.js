/* eslint-disable prettier/prettier */
import styled from 'styled-components'

import backg from '../../assets/backg.svg'

export const Container = styled.section`
  background-image: url(${backg});
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ContainerItens = styled.main`
  background: #373737;
  width: 32em;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem 3rem;
  img {
    position: relative;
    top: 0em;
  }
  .btnEye {
    border: none;
    background: none;
    height: 25px;
    width: 25px;
    position: relative;
    left: 11em;
    font-size: 1.2rem;
    color: #ffffff;
    bottom: ${props => (props.error ? '7.67em' : '6.8em')};
  }
`
export const P = styled.p`
  color: #ffffff;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
`
export const Label = styled.p`
  color: #ffffff;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 5px;
`

export const Input = styled.input`
  width: 100%;
  height: 43px;
  background: #ffffff;
  box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
  border-radius: 5px;
  margin: 0 0 2.5em;
  border: ${props => (props.validIpnut ? '2px solid #CC1717;' : 'none')};
  padding-left: 10px;
`

export const SignInParag = styled.p`
  color: #ffffff;
  position: relative;
  top: -2em;
  margin: 0 0 0 10px;
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;

  a {
    text-decoration: underline;
  }
`

