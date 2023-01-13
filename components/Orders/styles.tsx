import styled from 'styled-components';
import { DeleteButtonProps } from './Order';

// --- ItemList --- //

export const ItemListContainer = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(2, auto);
    max-height: 4rem;
`;

export const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0.3rem 0.9rem;
`;

export const ItemCount = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.3rem;
    width: 1.3rem;
    border-radius: 50%;
    background-color: #143642;
`;

export const Counter = styled.div`
    display: flex;
    align-items: baseline;
`;

export const CountX = styled.div`
    content: 'x';
    color: white;
    font-size: 0.5rem;
`;

export const CountValue = styled.div`
    color: white;
    font-size: 0.7rem;
`;

export const ItemName = styled.div`
    font-size: 0.8rem;
    color: #143642;
`;

// --- Order --- //

export const OrderContainer = styled.div`
    display: flex;
    background-color: white;
    justify-content: space-between;
    border-radius: 1.2rem;
    padding: 1.5rem 1.7rem;
    align-items: center;
`;

export const OrderContent = styled.div`
    display: flex;
    gap: 1rem;
`;

export const OrderPrice = styled.div`
    display: flex;
    flex-direction: column;
`;

export const OrderStatusContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${props => props.color};
`;

export const Status = styled.div`
    font-size: 1.1rem;
    font-weight: 5000;
    max-width: 6rem;
    text-align: right;
`;

export const DeleteOrderButton = styled.div<DeleteButtonProps>`
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-right: ${props => (props.isShow ? '0' : '-3.5rem')};
    transition: margin-right 0.3s ease-in-out;
`;

// --- CurrentOrder --- //

export const CurrentOrderContainer = styled.div`
    height: 100%;
    padding: 1.5rem;
`;

export const CurrOrderContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CurrOrderHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const OrderTimer = styled.div`
    font-size: 1.3rem;
`;

export const NoOrderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    height: 100%;
`;

export const NoOrderText = styled.div`
    font-size: 1rem;
    text-align: center;
    color: #143642;
    max-width: 17rem;
`;
