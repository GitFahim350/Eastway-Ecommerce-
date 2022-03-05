import React, { useEffect, useState } from 'react'
import Product from './Product';
import styled from 'styled-components'
import { Grid } from '@mui/material';
import axios from 'axios'

const Container = styled.div`
   
    margin-top: 10px;
`;

const Products = ({ cat, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    cat ? `http://localhost:8000/api/product?category=${cat.category}`
                        : "http://localhost:8000/api/product"
                )
                setProducts(res.data)
            }
            catch (err) {
                console.log(err)
            }
        };
        getProducts();
    }, [cat]);


    useEffect(() => {
        cat &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) =>
                        item[key].includes(value)
                    )
                )
            )

    }, [cat,products, filters]);

    return (
        <Container >
            <Grid className='w-100' container spacing={2}>
                {
                    cat ? filteredProducts.map((item) =>
                        <Product key={item.id} item={item}></Product>
                    )
                    :products
                    .slice(0,4)
                    .map((item) =>
                    <Product key={item.id} item={item}></Product>)
                }
            </Grid>
        </Container>
    )
}

export default Products
