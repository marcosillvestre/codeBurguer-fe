/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import { } from 'react-router-dom'
import Offer from '../../assets/OFERTAS.png'
import api from '../../services/api'
import format from '../../utils/FormatedCurrency'
import { Container, OfferLogo, ContainerItens, OfferImage, OfferButton } from './styles'


export function OfferCarrousel() {

    const [Offers, setOffers] = useState([])

    useEffect(() => {
        async function loadOffer() {
            const { data } = await api.get('products')
            const offersProducts = data.filter(product => product.offer).map(offer => {
                return { ...offer, formatedValue: format(offer.price) }
            })


            console.log(offersProducts)
            setOffers(offersProducts)
        }
        loadOffer()
    }, [])

    const breakpoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
    ]


    return (
        <Container>
            <OfferLogo src={Offer} />
            <Carousel
                itemsToShow={4}
                style={{ width: '90%' }}
                breakPoints={breakpoints}
            >

                {Offers &&
                    Offers.map(Offer => (

                        <ContainerItens key={Offer.id}>
                            <OfferImage src={Offer.url} alt='Imagem da Oferta' />
                            <p>{Offer.name}</p>
                            <p>{Offer.formatedValue}</p>
                            <OfferButton >Peça agora</OfferButton>
                        </ContainerItens>

                    ))
                }

            </Carousel>
        </Container>
    )
}

