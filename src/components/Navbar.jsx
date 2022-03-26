import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from "react";
import styled from "styled-components";
import { mobile } from "./responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { logout } from '../redux/userRedux';

const Container = styled.div`
  
  
  font-family: 'Space Mono', monospace;
  
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Language = styled.span`
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  
  
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;



const Logo = styled.h1`
  font-weight: bold;
  
`;


const MenuItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
  color: #727272;
  
`;

const Navbar = () => {
  const quantity = useSelector(state => state.cart.quantity)
  const user = useSelector((state) => state.user.currentUser)
  const dispatch = useDispatch();
  return (
    <Container>
      <Wrapper>
        <Left>
          
          <Link style={{textDecoration:"none"}} to="/"><MenuItem>EN</MenuItem></Link>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>EASTWAY.</Logo>

        </Center>
        <Right>
          {!user && <Link style={{textDecoration:"none"}} to="/register"><MenuItem>REGISTER</MenuItem></Link>}

          {!user ? <Link style={{textDecoration:"none"}} to="/login" ><MenuItem>SIGN IN</MenuItem></Link> : <MenuItem onClick={() => {
            dispatch(logout())
          }}>Logout</MenuItem>}
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;