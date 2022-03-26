import styled from 'styled-components';
import { Grid } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';


import { Link } from 'react-router-dom';

const Image = styled.img`
    width:100%;
    object-fit: cover;
    height: 100%;
`;
const Info = styled.div`
    opacity:0;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left:0;
    background-color: #bbb9b9;
    
    display:flex ;
    align-items:center ;
    justify-content:center ;
    transition: all 0.5s ease;


`;
const Item = styled.div`
    width: 100%;
    height: 40vh;
    position: relative;
    margin: 10px;
    background-color: #d4d4d4;

    &:hover ${Info}{
        opacity:0.6 ;
    }
`;
const Icon=styled.div`
    border-radius: 50%;
    margin:10px;
    padding:5px;
    background-color:#ffffff;
    transition: all 0.5s ease;
    opacity:0.8 ;
    &:hover{
        transform:scale(1.2) ;
    }
`

const Product = ({ item }) => {
    return (
        <Grid item xs={6} md={3} >
            <Link to={`/product/${item._id}`} >
                <Item>
                    <Image src={item.img} alt="" />
                    <Info>

                        <Icon >
                            <SearchIcon style={{color:'grey'}}/>
                        </Icon >
                        <Icon >
                            <FavoriteBorderOutlinedIcon style={{color:'grey'}}/>
                        </Icon >
                        <Icon >
                            <ShoppingCartSharpIcon style={{color:'grey'}}/>
                        </Icon >

                    </Info>
                </Item>
            </Link >
        </Grid>
    )
}
export default Product
