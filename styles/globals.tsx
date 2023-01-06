import styled from 'styled-components';

export const PageContainer = styled.div`
    width: 100%;
    min-height: 100%;
    padding: 3.5rem;
    @media (max-width: 800px) {
        padding: 2rem;
    }
`;

export const PageTitle = styled.h1`
    width: 100%;
    font-weight: 700;
    font-size: 3.5rem;

    line-height: 1;
    margin-top: 1rem;
    margin-bottom: 3rem;
    color: #143642;
`;

export const Slogan = styled.div`
    font-size: 5em;
    font-weight: 700;
    align-items: center;
    width: 10em;
    color: #143642;
    @media (max-width: 1080px) {
        font-size: 3em;
    }
    @media (max-width: 500px) {
        font-size: 2em;
    }
`;

export const SectionContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 1.4rem 0;
    gap: 1.5rem;
`;
export const SectionTitle = styled.div`
    color: #143642;
    font-size: 1.7rem;
    font-weight: 600;
    white-space: nowrap;
`;
export const SectionLine = styled.div`
    background-color: #d9d9d9;
    width: 100%;
    height: 0.12rem;
`;
