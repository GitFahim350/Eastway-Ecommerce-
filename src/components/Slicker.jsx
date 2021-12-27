import React from 'react'
import styled from 'styled-components'
import girl from './Logo/image-removebg-preview.png'
import boy from './Logo/photo-1552374196-1ab2a1c593e8-removebg-preview.png'
import denim from './Logo/kendall-jenner-oversize-denim-jacket-removebg-preview.png'

const ImageContainer = styled.img`
    width:'100%';
    
    flex: 1;
    object-fit: cover;

`;
const Imagediv = styled.div`
    flex: 1;
    width: 100%;
    height: 70vh;
`;
const InfoContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Paragraph = styled.p`
    letter-spacing: 3px;
`;

const Slicker = () => {
    return (
        <div id="carouselExampleControls" className="carousel slide w-100" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active" style={{width:'100%',height:'100%' }}>

                    <div style={{ display: 'flex',backgroundColor:'#E6FFF8'}}>
                        <Imagediv>
                            <ImageContainer src={boy}></ImageContainer>
                        </Imagediv>
                        <InfoContainer>
                            <h1>Lorem ipsum dolor sit amet.</h1>
                            <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, ut?</Paragraph>
                        </InfoContainer>
                    </div>

                </div>
                <div class="carousel-item" style={{width:'100%',height:'100%' }}>
                    <div style={{ display: 'flex',backgroundColor:'#FFF4D6',width:'100%',height:'100%' }}>
                        <Imagediv>
                            <ImageContainer src={girl}>

                            </ImageContainer>
                        </Imagediv>
                        <InfoContainer>
                            <h1>Lorem ipsum dolor sit amet.</h1>
                            <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, ut?</Paragraph>
                        </InfoContainer>

                    </div>

                </div>
                <div class="carousel-item" style={{width:'100%',height:'100%' }}>
                    <div style={{ display: 'flex',backgroundColor:'#F6FEE4',width:'100%',height:'100%' }}>
                        <Imagediv>
                            <ImageContainer src={denim}>

                            </ImageContainer>

                        </Imagediv>
                        <InfoContainer>
                            <h1>Lorem ipsum dolor sit amet.</h1>
                            <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, ut?</Paragraph>
                        </InfoContainer>
                    </div>

                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Slicker

