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
  div{
    img{
      height: 640px;
      width: 526px;
    }
  
  }
`
export const ContainerItens = styled.main`
  background: #373737;
  height: 68.3%;
  width: 35em;
  border-radius: 0 10px 10px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 60px;
  div{
    display: flex ;
    justify-content: center ;
  img {
    position: relative;
    top: -2em;
    width: 400px  ;
    height: 200px
  }
  }

  .btnEye {
    border: none;
    background: none;
    height: 25px;
    width: 25px;
    position: relative;
    left: 10.5em;
    font-size: 1.2rem;
    color: #ffffff;
    bottom: 5.1em;
  }
`
export const P = styled.p`
  color: #ffffff;
  text-align: center;
  font-weight: 500;
  font-size: 24px;
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
  margin: 0 0 3em;
  border: ${props => (props.validIpnut ? '2px solid #CC1717;' : 'none')};
  padding-left: 10px;
`

export const SignInParag = styled.p`
  color: #ffffff;
  position: relative;
  top: 1em;
  margin: 0 0 0 10px;
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;

  a {
    text-decoration: underline;
  }
`
export const MessageError = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #cc1717;
  position: relative;
  top: -35px;
`
