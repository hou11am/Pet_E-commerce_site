import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const Container = styled.div`
  height: 50px;
  background-color: black;
`;

const Wrapper = styled.div`
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  color: white;
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  color: white;
  &:hover {
    color: gold;
  }
`;
const SearchContainer = styled.div`
  height: 25px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
const SearchInput = styled.input`
  border: none;
  height: 20px;
  margin-left: 10px;
`;
const Center = styled.div`
  color: white;
  flex: 1;
  text-align: center;
`;

const Logo = styled.span`
  font-size: 24px;
  word-spacing: 10px;
  letter-spacing: 2px;
  font-weight: bold;
  cursor: pointer;
`;
const Right = styled.div`
  color: white;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  &:hover {
    color: gold;
  }
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <SearchInput />
            <SearchIcon style={{ color: "black", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>BOUTIQUE AMAZONE</Logo>
        </Center>
        <Right>
          <MenuItems>REGESTER</MenuItems>
          <MenuItems>SIGN IN</MenuItems>
          <MenuItems>
            <Badge badgeContent={1} color="secondary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItems>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
