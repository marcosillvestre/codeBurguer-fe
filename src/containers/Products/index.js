/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react'
import { } from 'react-router-dom'

import PropTypes from 'prop-types'

import ProductsImage from '../../assets/products-min.png'
import { CardProduct } from '../../components'
import api from '../../services/api'
import format from '../../utils/FormatedCurrency'
import { Container, ProductsLogo, CategoryNav, CategoryButton, ContainerProduct } from './styles'


export function Products({ location: { state } }) {

    let categoryId = 0
    if (state?.categoryId) {
        categoryId = state.categoryId
    }

    const [filteredProducts, setFilteredProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [activeCategory, setActiveCategory] = useState(categoryId)


    useEffect(() => {
        async function loadCategory() {
            const { data } = await api.get('categories')

            const newCategories = [{ id: 0, name: 'Todas' }, ...data]

            setCategories(newCategories)
        }

        async function loadProduct() {
            const { data: allProducts } = await api.get('products')
            const formatedPriceProducts = allProducts.map(offer => {
                return { ...offer, formatedValue: format(offer.price) }
            })

            setProducts(formatedPriceProducts)

        }

        loadProduct()
        loadCategory()
    }, [])



    useEffect(() => {

        if (activeCategory === 0) {
            setFilteredProducts(products)
        }
        else {
            const newFIlteredProducts = products.filter(
                products => products.category_id === activeCategory
            )

            setFilteredProducts(newFIlteredProducts)
        }
    }, [activeCategory, products])


    return (
        <Container>

            <ProductsLogo src={ProductsImage} />
            <CategoryNav>
                {categories &&
                    categories.map(category => (

                        <CategoryButton
                            onClick={() => { setActiveCategory(category.id) }}
                            type="button"
                            isActivated={activeCategory === category.id}
                            key={category.id}
                        >
                            {category.name}
                        </CategoryButton>
                    ))
                }
            </CategoryNav>


            <ContainerProduct >
                {
                    filteredProducts &&
                    filteredProducts.map(product => (

                        <CardProduct key={product.id} product={product} />
                    ))
                }



            </ContainerProduct>
        </Container>
    )
}




Products.propTypes = {
    location: PropTypes.object
}