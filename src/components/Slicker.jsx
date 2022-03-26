import React from 'react'
import styled from 'styled-components'
import girl from './Logo/image-removebg-preview.png'
import boy from './Logo/photo-1552374196-1ab2a1c593e8-removebg-preview.png'
import denim from './Logo/kendall-jenner-oversize-denim-jacket-removebg-preview.png'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// const ImageContainer = styled.img`
//     width:'100%';

//     flex: 1;
//     object-fit: cover;

// `;
// const Imagediv = styled.div`
//     flex: 1;
//     width: 100%;
//     height: 70vh;
// `;
// const InfoContainer = styled.div`
//     flex: 1;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
// `;
// const Paragraph = styled.p`
//     letter-spacing: 3px;
// `;

const Container = styled.div`
    width:300vw ;
    height: 100vh;
    padding:5px ;
    display:flex ;
    position: relative;
    overflow:hidden ;
`

const Wrap = styled.div`
    display:flex ;
    width:100% ;
    
`
const Image = styled.img`
    height: 80%;
    object-fit: cover;
`


const Iconcontainer = styled.div`
    width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`
const Info = styled.div`
    flex:1 ;
   
    display:flex ;
    flex-direction:column ;
    justify-content:center ;
    padding: 50px;
    
`
const Slicker = () => {
    return (
        // <div id="carouselExampleControls" className="carousel slide w-100" data-bs-ride="carousel">
        //     <div class="carousel-inner">
        //         <div class="carousel-item active" style={{width:'100%',height:'100%' }}>

        //             <div style={{ display: 'flex',backgroundColor:'#E6FFF8'}}>
        //                 <Imagediv>
        //                     <ImageContainer src={boy}></ImageContainer>
        //                 </Imagediv>
        //                 <InfoContainer>
        //                     <h1>Lorem ipsum dolor sit amet.</h1>
        //                     <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, ut?</Paragraph>
        //                 </InfoContainer>
        //             </div>

        //         </div>
        //         <div class="carousel-item" style={{width:'100%',height:'100%' }}>
        //             <div style={{ display: 'flex',backgroundColor:'#FFF4D6',width:'100%',height:'100%' }}>
        //                 <Imagediv>
        //                     <ImageContainer src={girl}>

        //                     </ImageContainer>
        //                 </Imagediv>
        //                 <InfoContainer>
        //                     <h1>Lorem ipsum dolor sit amet.</h1>
        //                     <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, ut?</Paragraph>
        //                 </InfoContainer>

        //             </div>

        //         </div>
        //         <div class="carousel-item" style={{width:'100%',height:'100%' }}>
        //             <div style={{ display: 'flex',backgroundColor:'#F6FEE4',width:'100%',height:'100%' }}>
        //                 <Imagediv>
        //                     <ImageContainer src={denim}>

        //                     </ImageContainer>

        //                 </Imagediv>
        //                 <InfoContainer>
        //                     <h1>Lorem ipsum dolor sit amet.</h1>
        //                     <Paragraph>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, ut?</Paragraph>
        //                 </InfoContainer>
        //             </div>

        //         </div>
        //     </div>
        //     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        //         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        //         <span class="visually-hidden">Previous</span>
        //     </button>
        //     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        //         <span class="carousel-control-next-icon" aria-hidden="true"></span>
        //         <span class="visually-hidden">Next</span>
        //     </button>
        // </div>
        <Container>


            <Wrap>

                <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Image src={boy} />
                </div>

                <Info>

                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolores quod rerum aliquam ratione earum iste expedita eius provident tempore.</p>
                </Info>
            </Wrap>

            <Wrap>

                <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Image src={boy} />
                </div>

                <Info>

                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolores quod rerum aliquam ratione earum iste expedita eius provident tempore.</p>
                </Info>
            </Wrap>

            <Wrap>

                <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Image src={boy} />
                </div>

                <Info>

                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolores quod rerum aliquam ratione earum iste expedita eius provident tempore.</p>
                </Info>
            </Wrap>



            <Iconcontainer direction="left" style={{ width: "50px", height: "50px", backgroundcolor: "white" }}>
                <ArrowBackIosIcon />
            </Iconcontainer>
            <Iconcontainer direction="right" style={{ width: "50px", height: "50px", backgroundcolor: "white" }}>
                <ArrowForwardIosIcon />
            </Iconcontainer>

        </Container>
    )
}

export default Slicker

