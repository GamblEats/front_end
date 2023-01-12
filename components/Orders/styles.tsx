import styled from 'styled-components';

// --- Order --- //

export const OrderContainer = styled.div`
    display: flex;
    background-color: white;
    justify-content: space-between;
    border-radius: 1.2rem;
    padding: 1.5rem 1.7rem;
    align-items: center;
`;

export const OrderDate = styled.div`
    font-size: 1.3rem;
    color: #143642;
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
