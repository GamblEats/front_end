import styled from 'styled-components';
import { ItemTextProps } from './ItemCard';

export const ItemCardContainer = styled.div`
    display: flex;
    background-color: white;
    border-radius: 1.2rem;
    height: 9rem;
    @media (max-width: 600px) {
        height: 11rem;
    }
`;

export const ItemImg = styled.img`
    border-radius: 1.2rem;
    width: 9rem;
    object-fit: cover;
`;

export const ItemCardHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ItemCardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;
`;

export const ItemText = styled.div<ItemTextProps>`
    color: #143642;
    font-size: ${props => props.size};
    font-weight: ${props => props.weight || '500'};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    @media (max-width: 600px) {
        transform: scale(0.9);
    }
`;

export const ItemCardButton = styled.div`
    display: flex;
    justify-content: end;
`;
