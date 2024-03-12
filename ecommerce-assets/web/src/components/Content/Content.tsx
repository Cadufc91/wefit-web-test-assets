import React, { useState, useEffect } from 'react';
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { 
    AddCart, 
    ButtonText, 
    LeftIconButton, 
    MovieContainer, 
    MovieContent, 
    MovieImage, 
    MoviePrice, 
    MovieTitle, 
    Quantity 
} from './style';

interface MovieProps {
  id: number;
  image: string;
  title: string;
  price: number;
}

interface ContentProps {
  setTotalItems: React.Dispatch<React.SetStateAction<number>>;
}

const Content: React.FC<ContentProps> = ({ setTotalItems }) => {
    const [movie, setMovie] = useState<MovieProps[]>([]);
    const [quantity, setQuantity] = useState<{ [key: number]: number }>({});

    useEffect(() => {
        fetch('server.json')
            .then(response => response.json())
            .then(data => {
                setMovie(data.products);
                // Initialize quantity for each movie to 0
                const initialQuantity = data.products.reduce((acc: { [key: number]: number }, movie: MovieProps) => {
                    acc[movie.id] = 0;
                    return acc;
                }, {});
                setQuantity(initialQuantity);
            });
    }, []);

    const handleAddQuantity = (id: number) => {
        setQuantity(prevQuantity => ({
            ...prevQuantity,
            [id]: (prevQuantity[id] || 0) + 1,
        }));
    };

    const handleAddItems = (id: number) => {
        setTotalItems(prevTotalItems => prevTotalItems + 1);
    }

  return (
    <>
        <MovieContainer>
            {movie.map(movie => (
                <MovieContent key={movie.id}>
                    <MovieImage src={movie.image} alt={movie.title}/>
                    <MovieTitle>{movie.title}</MovieTitle>
                    <MoviePrice>R$ {movie.price}</MoviePrice>
                    <AddCart bgColor={quantity[movie.id] > 0 ? "green" : "#009EDD"}>
                        <LeftIconButton onClick={() => handleAddQuantity(movie.id)}>
                            <MdOutlineAddShoppingCart size={'12px'}/>
                            <Quantity>{quantity[movie.id] || 0}</Quantity>
                        </LeftIconButton>
                        <ButtonText onClick={() => handleAddItems(movie.id)}>Adicionar ao carrinho </ButtonText>
                    </AddCart>
                </MovieContent>
            ))}
        </MovieContainer>
    </>
  )
}

export default Content