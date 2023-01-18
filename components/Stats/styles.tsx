import styled from 'styled-components';

export const StatsContainer = styled.div`
    width: 100%;
`;

export const StatsWrapper = styled.div`
    display: flex;
    gap: 2rem;

    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
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
    width: 100%;
    height: 370px;
    background-color: white;
`;

export const AverageContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    border-radius: 1rem;
    height: 370px;
    background-color: white;
    padding: 1rem;
    align-items: center;
`;

export const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;

export const AverageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    @media screen and (max-width: 800px) {
        width: 100%;
    }
`;

export const ContainerTitle = styled.h2`
    margin-top: 2rem;
    margin-bottom: 0;
    color: #143642;
`;

export const AverageHeading = styled.h4`
    color: #143642;
`;

export const AverageText = styled.p`
    font-size: 2.5rem;
    color: #143642;
    margin-top: 1.5rem;
`;
