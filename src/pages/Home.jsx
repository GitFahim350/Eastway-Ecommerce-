import React from 'react'
import Navbar from '../components/Navbar'
import Slicker from '../components/Slicker'
import CategoryList from '../components/CategoryList'
import Products from '../components/Products'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <Slicker></Slicker>
            <CategoryList></CategoryList>
            <Products></Products>
            <Footer></Footer>
        </>

    )
}

export default Home
