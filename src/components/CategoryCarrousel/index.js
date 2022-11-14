/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { useQuery } from 'react-query'

import Category from '../../assets/CATEGORIAS.png'
import apiCodeB from '../../services/api'
import { Container, CategoryLogo, ContainerItens, CategoryImage, CategoryButton } from './styles'


export function CategoryCarrousel() {

    const [categories, setCategories] = useState([])

    async function getCategories() {
        const { data } = await apiCodeB.get('categories')
        setCategories(data)
    }

    const { isFetching } = useQuery('Categories', () => getCategories())


    const breakpoints = [
        { width: 1, itemsToShow: 1 },
        { width: 400, itemsToShow: 2 },
        { width: 600, itemsToShow: 3 },
        { width: 900, itemsToShow: 4 },
    ]



    return (
        <Container>
            <CategoryLogo src={Category} />
            <Carousel
                itemsToShow={4}
                style={{ width: '90%' }}
                breakPoints={breakpoints}
            >

                {categories &&
                    categories.map(category => (

                        <ContainerItens key={category.id}>
                            <CategoryImage src={category.url} alt='Imagem da categoria' />
                            <CategoryButton
                                to={{
                                    pathname: "/produtos",
                                    state: { categoryId: category.id }
                                }}>
                                {category.name}</CategoryButton>
                        </ContainerItens>

                    ))
                }

            </Carousel>
            {isFetching && <p>Carregando...</p>}
        </Container>
    )
}

