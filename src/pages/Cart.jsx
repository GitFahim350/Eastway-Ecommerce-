
import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import { popularProducts } from '../components/data';
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
`;
const ProductContainer = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    margin: 15px;
    
    
    `;
const OrderContainer = styled.div`
    flex: 1;
    padding: 40px;
    background-color: #e2ded8;
    height: 50vh;
    margin-top: 50px;
    border-radius: 10px;
`;
const ProductInfo = styled.div`
        flex:5;
        display: flex;
        flex-direction: column;
`;


const Individual = styled.div`
    
    margin: 5px;
    width: 100%;
    border-bottom: 1px solid black;
    display: flex;
`;

const Button=styled.button`
    background-color: black;
    color: white;
    width: 100%;
`;

const Cart = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Container>
                <ProductContainer>
                    <Individual className='mt-5 mb-5' style={{ width: '100%' }}>
                        <div style={{ flex: 1 }}>
                            <img src={popularProducts[0].img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ flex: 5 }} className='p-3'>
                            <p className='mt-3'><strong>Product: Hertitez Tshirt</strong></p>
                            <p className='mt-3'><strong>ID: 694021412120</strong></p>
                            <div className='mt-3' style={{ backgroundColor: 'green', width: '20px', height: '20px', borderRadius: '50%' }}></div>
                            <p className='mt-3'><strong>Quantity:10</strong></p>
                        </div>
                    </Individual>

                    <Individual className='mt-5 mb-5' style={{ width: '100%' }}>
                        <div style={{ flex: 1 }}>
                            <img src={popularProducts[0].img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ flex: 5 }} className='p-3'>
                            <p className='mt-3'><strong>Product: Hertitez Tshirt</strong></p>
                            <p className='mt-3'><strong>ID: 694021412120</strong></p>
                            <div className='mt-3' style={{ backgroundColor: 'green', width: '20px', height: '20px', borderRadius: '50%' }}></div>
                            <p className='mt-3'><strong>Quantity:10</strong></p>
                        </div>
                    </Individual>

                    <Individual className='mt-5 mb-5' style={{ width: '100%' }}>
                        <div style={{ flex: 1 }}>
                            <img src={popularProducts[0].img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ flex: 5 }} className='p-3'>
                            <p className='mt-3'><strong>Product: Hertitez Tshirt</strong></p>
                            <p className='mt-3'><strong>ID: 694021412120</strong></p>
                            <div className='mt-3' style={{ backgroundColor: 'green', width: '20px', height: '20px', borderRadius: '50%' }}></div>
                            <p className='mt-3'><strong>Quantity:10</strong></p>
                        </div>
                    </Individual>

                    <Individual className='mt-5 mb-5' style={{ width: '100%' }}>
                        <div style={{ flex: 1 }}>
                            <img src={popularProducts[0].img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <div style={{ flex: 5 }} className='p-3'>
                            <p className='mt-3'><strong>Product: Hertitez Tshirt</strong></p>
                            <p className='mt-3'><strong>ID: 694021412120</strong></p>
                            <div className='mt-3' style={{ backgroundColor: 'green', width: '20px', height: '20px', borderRadius: '50%' }}></div>
                            <p className='mt-3'><strong>Quantity:10</strong></p>
                        </div>
                    </Individual>
                </ProductContainer>
                <OrderContainer>

                    <p className='display-6'>ORDER SUMMARY</p>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p className='display-7'><strong>Subtotal</strong></p>
                        <p className='display-7'>$297</p>
                    </div>


                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p className='display-7'><strong>Estimated shiping</strong></p>
                        <p className='display-7'>$297</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p className='display-7'><strong>Shiping Discount</strong></p>
                        <p className='display-7'>$297</p>
                    </div>
                    <hr />
                    <div className='mt-3' style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p style={{fontWeight:'bold',fontSize:'2rem'}}>Total</p>
                        <p style={{fontWeight:'bold',fontSize:'2rem'}}>$297</p>
                    </div>

                    <Button>Order Now</Button>


                </OrderContainer>
            </Container>
        </div>
    )
}

export default Cart
