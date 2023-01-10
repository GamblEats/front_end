import styled from 'styled-components';

// --- Button ---

export const ButtonContainer = styled.button`
    display: flex;
    gap: 1rem;
    background-color: ${props => props.color || 'transparent'};
    border-radius: 1rem;
    padding: 0.8rem 1.8rem;
    border: none;
    cursor: pointer;
    transition: opacity 0.3s;
    &:hover {
        opacity: 0.8;
    }
`;
export const ButtonLabel = styled.div`
    font-size: 1.1rem;
    color: ${props => props.color};
`;
export const ButtonIcon = styled.div`
    font-size: 1.1rem;
`;

// --- PageHeader --- //

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 1rem 0 3rem 0;
`;

export const HeaderTitle = styled.div`
    font-weight: 700;
    font-size: 3.5rem;
    color: #143642;
`;

export const HeaderWidgets = styled.div`
    display: flex;
    gap: 1rem;
`;

// --- ImgUploader --- //

export const UploaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f2f2f2;
    height: 100%;
    width: 100%;
    border-radius: 1em;
`;
