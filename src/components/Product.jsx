import styled from 'styled-components';
import { Grid } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';

import { Link } from 'react-router-dom';
const Item = styled.div`
    width: 100%;
    height: 40vh;
    position: relative;
    margin: 10px;
    background-color: #d4d4d4;
`;
const Image = styled.img`
    width:100%;
    object-fit: cover;
    height: 100%;
`;
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #0000004a;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Product = ({ item }) => {
    return (
        <Grid item xs={6} md={3} >
            <Link to={`/product/${item._id}`} >
                <Item>
                    <Image src={item.img} alt="" />
                    <Info >
                        <SearchIcon fontSize='large' style={{ padding: '5px' }}></SearchIcon>
                        <FavoriteBorderIcon fontSize='large' style={{ padding: '5px' }}></FavoriteBorderIcon>
                    </Info>
                </Item>
            </Link >
        </Grid>
    )
}
export default Product
