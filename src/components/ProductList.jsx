import React, { useState } from 'react'
import Navbar from './Navbar'
import Products from './Products'
import Footer from './Footer'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

const FilterItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Filter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px;
`
const Select=styled.select`
    margin-right: 10px;
`;
const ProductList = () => {

    const cat=useParams();
    const [filter,setFilter]=useState({});
    const [sort,setSort]=useState({});
    const handleFilters=(e)=>{
        const value=e.target.value;
        setFilter({
            ...filter,
            [e.target.name]:value,
        })
    }
    const handleSort=(e)=>{
        const value=e.target.value;
        setSort(value)
    }
    console.log(filter);
    console.log(sort);
    return (
        <div>
            <Navbar></Navbar>
            <FilterItem>
                <Filter>
                    <span style={{fontSize:'20px',margin:'20px'}}>Filter Products</span>
                    <Select name='color' onChange={handleFilters}>
                        <option value="" disabled selected>Color</option>
                        <option value="White">White</option>
                        <option value="Red">Red</option>
                        <option value="Green">Green</option>
                        <option value="Blue">Blue</option>
                    </Select>

                    <Select name='size' onChange={handleFilters}>
                        <option value="" disabled selected>Size</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </Select>
                </Filter>
                <Filter>
                <span style={{fontSize:'20px',margin:'20px'}}>Sort by size</span>
                    <Select name='sort' onChange={handleSort}>
                        <option value="Newest">Newest</option>
                        <option value="asc">Price(asc)</option>
                        <option value="dsc">Price(dsc)</option>
                    </Select>

                    

                </Filter>
            </FilterItem>
            <Products></Products>

            <Footer></Footer>

        </div>
    )
}

export default ProductList
