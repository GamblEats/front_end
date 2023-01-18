import styled from 'styled-components';
import { SmallProps } from './Button';

// --- Button --- //

export const ButtonContainer = styled.button<SmallProps>`
    display: flex;
    gap: ${props => (props.small ? '0.5rem' : '1rem')};
    background-color: ${props => props.color || 'transparent'};
    border-radius: 1rem;
    padding: ${props => (props.small ? '0.5rem 1rem' : '0.8rem 1.8rem')};
    border: none;
    cursor: pointer;
    transition: opacity 0.3s, background-color 0.2s ease-in-out;
    white-space: nowrap;
    &:hover {
        opacity: 0.8;
    }
`;
export const ButtonLabel = styled.div<SmallProps>`
    font-size: ${props => (props.small ? '0.8rem' : '1.1rem')};
    color: ${props => props.color};
`;
export const ButtonIcon = styled.div<SmallProps>`
    font-size: ${props => (props.small ? '0.8rem' : '1.1rem')};
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

// --- SearchInput --- //

export const InputContainer = styled.div`
    position: relative;
    width: 100%;
`;

export const Input = styled.input`
    border-radius: 10rem;
    font-size: 1rem;
    border: none;
    padding: 1rem 1.5rem;
    width: 100%;
    &::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #d9d9d9;
        opacity: 1; /* Firefox */
    }
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
