import styled from "styled-components";

interface AddCartProps {
  bgColor: string;
}

export const MovieContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;

export const MovieContent = styled.div`
    height: 324px;
    width: 312px;
    background-color: white;
    border-radius: 4px;
    padding: 16px;
    text-align: center;
    color: black;
    gap: 8px;
`;

export const MovieImage = styled.img`
    width: 147px;
    height: 188px;
`;

export const MovieTitle = styled.h3`
    font-size: 12px;
    font-weight: 700;
`;

export const MoviePrice = styled.p`
    font-size: 16px;
    font-weight: 700;
`;

export const AddCart = styled.button<AddCartProps>`
    background-color: ${props => props.bgColor};
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border: none;
    gap: 12px;
    border-radius: 4px;
`;

export const LeftIconButton = styled.div`
    width: 25px;
    display: flex;
`;

export const Quantity = styled.div`
    font-size: 12px;
`;

export const ButtonText = styled.p`
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
`;