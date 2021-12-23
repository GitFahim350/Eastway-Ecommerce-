import React from 'react'

import { popularProducts } from './data'
import Product from './Product';
import styled from 'styled-components'
import { Grid } from '@mui/material';

const Container = styled.div`
   
    margin-top: 10px;
`;

const Products = () => {
    return (
        <Container >
            <Grid className='w-100' container spacing={2}>
                {
                    popularProducts.map((item) =>
                        <Product key={item.id} item={item}></Product>
                    )
                }
            </Grid>
        </Container>


    )
}

export default Products
