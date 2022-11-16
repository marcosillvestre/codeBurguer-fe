/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import PropTypes from 'prop-types';

import { useCart } from '../../hooks/CartContext';
import apiCodeB from '../../services/api';
import formatedCurrency from '../../utils/FormatedCurrency';
import { Container, ContainerItens, Finalize } from './styles';


export function ResumeCart() {
    const [finalPrice, setFinalprice] = useState(0)
    const [deliverTax] = useState(5)

    const { cartData } = useCart()


    useEffect(() => {
        const productPrice = cartData.reduce((acc, curr) => {
            return curr.price * curr.quantity + acc
        }, 0)

        setFinalprice(productPrice)
    }, [finalPrice, cartData])

    const sendOrder = async () => {
        const order = cartData.map(product => {
            return { id: product.id, quantity: product.quantity }
        })

        await toast.promise(apiCodeB.post('orders', {
            products: order
        }), {

            pending: 'Realizando seu pedido',
            success: 'Pedido efetuado com sucesso',
            error: 'Alguma coisa deu errado, tente novamente mais tarde'

        }
        )
    }
    return (

        <Container>
            <ContainerItens>
                <h2>Resumo do pedido</h2>
                <div >
                    <p>Quantidade</p>
                    <p>{cartData.length}</p>
                </div>
                <div >
                    <p>Itens</p>
                    <p>{formatedCurrency(finalPrice)}</p>
                </div>
                <div >
                    <p> Taxa de entrega</p>
                    <p> {formatedCurrency(deliverTax)}</p>
                </div>
                <div style={{ marginTop: '10px' }}>
                    <h4> Total</h4>
                    <h4>{formatedCurrency(finalPrice + deliverTax)}</h4>
                </div>
            </ContainerItens>

            <Finalize onClick={sendOrder}>Finalizar pedido</Finalize>
        </Container>
    )


}


ResumeCart.propTypes = {
    product: PropTypes.object
}
