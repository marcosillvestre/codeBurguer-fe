/* eslint-disable prettier/prettier */
import styled from 'styled-components'

import backg from '../../assets/backg.svg'

export const Container = styled.div`
  background-image: url(${backg});
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div{
    img{
      transform: translateX(5px) ;
      z-index: -1 ;

    }
  
  }
`
export const ContainerItens = styled.div`
      z-index: 1 ;
  background: #373737;
  width:400px;
  border-radius:  15px 15px ;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 75px 50px;
  div{
    display: flex ;
    justify-content: center ;
    align-items: center ;
  img {
    width: 350px  ;
    height: 200px;
  }
  }

  .btnEye {
    border: none;
    background: none;
    height: 25px;
    width: 25px;
    position: relative;
    left: 6.8em;
    font-size: 1.2rem;
    color: #ffffff;
    bottom: 4.1em;
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
  margin: 0 0 2em;
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

