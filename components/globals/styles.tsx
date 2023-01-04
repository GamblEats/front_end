import styled from 'styled-components';

// --- Button ---

export const ButtonContainer = styled.button`
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: ${props => props.color || 'palevioletred'};
    border-radius: 1em;
    padding: 1em;
    border: none;
    cursor: pointer;
    transition: opacity 0.3s;
    &:hover {
        opacity: 0.8;
    }
`;
export const ButtonLabel = styled.div`
    color: #f2f2f2;
`;
export const ButtonIcon = styled.div`
    color: #f2f2f2;
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
