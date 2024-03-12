import React from 'react';
import { Basket, Cart, HeaderContainer, Items, Title } from './style';
import { MdShoppingBasket } from "react-icons/md";
import { Link } from 'react-router-dom';

interface HeaderProps {
  totalQuantity: number;
}

const Header: React.FC<HeaderProps> = ({ totalQuantity }) => {
  return (
    <HeaderContainer>
        <Title>WeMovies</Title>
        <Cart>
            <Items>{totalQuantity} itens</Items>
            <Basket>
              <Link to="/cart">
                <MdShoppingBasket size={'24px'} color={'white'}/>
              </Link>
            </Basket>
        </Cart>
    </HeaderContainer>
  )
}

export default Header