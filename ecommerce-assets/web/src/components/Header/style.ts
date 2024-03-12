import styled from "styled-components";

export const HeaderContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px 16px;
    height: 88px;

    @media (min-width: 768px) {
        width: 1080px
    }
`;

export const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
`;

export const Cart = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    cursor: pointer;
`;

export const Items = styled.div`
    color: #999999;
    font-weight: 600;
    font-size: 12px;
`;

export const Basket = styled.button`
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
`;