import React from 'react'
import { CartBottom, CartContainer, CartSummary, CartTop, DeleteButton, Divider, MovieDetails, MovieDetailsBottom, MovieDetailsTop, MovieName, MovieValue, Price, PurchaseButton, SubTotal, SubTotalContainer, ThumbMovie, Total, TotalAmount, TotalItems } from './style'

const Cart = () => {
  return (
    <CartContainer>
        <CartTop>
            <ThumbMovie src='#' />
            <MovieDetails>
                <MovieDetailsTop>
                    <MovieName>Homem Aranha</MovieName>
                    <MovieValue>R$ 29,99</MovieValue>
                    <DeleteButton>
                        delete
                    </DeleteButton>
                </MovieDetailsTop>
                <MovieDetailsBottom>
                    menos
                    <TotalItems type="number" name="" id="" />
                    mais
                    <SubTotalContainer>
                        <SubTotal></SubTotal>
                        <Price></Price>
                    </SubTotalContainer>
                </MovieDetailsBottom>
            </MovieDetails>
        </CartTop>
        <Divider>divider</Divider>
        <CartBottom>
            <CartSummary>
                <Total>Total</Total>
                <TotalAmount>R$ valor</TotalAmount>
            </CartSummary>
            <PurchaseButton>Finalizar Pedido</PurchaseButton>
        </CartBottom>
    </CartContainer>
  )
}

export default Cart