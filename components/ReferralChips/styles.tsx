import styled from 'styled-components';

export const ChipsContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f2f2f2;
    border-radius: 0.7rem;
    padding: 0.7rem 1rem;
    margin: 1rem;
`;

export const ChipsName = styled.div`
    font-size: 0.9rem;
    color: #143642;
`;

export const ChipsStatus = styled.div`
    font-size: 0.7rem;
    color: ${props => props.color};
`;
