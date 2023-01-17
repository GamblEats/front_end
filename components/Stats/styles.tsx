import styled from 'styled-components';

export const StatsContainer = styled.div`
    width: 100%;
`;

export const OrdersCountContainer = styled.div`
    background: white;
    border-radius: 1rem;
    width: 100%;
    height: 400px;
`;

export const ItemsContainer = styled.div`
    margin-top: 1.5rem;
    border-radius: 1rem;
    width: 40%;
    height: 370px;
    background-color: white;

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;

export const ContainerTitle = styled.h2`
    margin-top: 2rem;
`;
