/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Category from '../../assets/CATEGORIAS.png'
import api from '../../services/api'
import { Container, CategoryLogo, ContainerItens, CategoryImage, CategoryButton } from './styles'


export function CategoryCarrousel() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function loadCategory() {
            const { data } = await api.get('categories')
            setCategories(data)
        }
        loadCategory()
    }, [])

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
        </Container>
    )
}

