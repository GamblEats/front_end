import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { inputProps } from '../AuthForm/inputForm';
import Select from 'react-select';

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Input = styled.input<inputProps>`
    outline: ${props => props.outline};
    border: none;
    border-radius: 1em;
    background-color: white;
    width: 100%;
    height: 3em;
    padding: 2em;

    ::placeholder {
        color: ${props => props.color};
    }
    @media (max-width: 500px) {
        width: 23em;
    }
`;

export const InputWraper = styled.div`
    display: flex;
    gap: 1rem;
    width: 100%;

    @media (max-width: 500px) {
        flex-direction: column;
    }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
    /* Add some styles for the icon */
    color: #143642;
    top: 50%;
    transform: translate(0, -50%);
    display: flex;
    position: absolute;
    right: 1em;
    width: 1.1em;
    height: 1.1em;
`;

export const Form = styled.form`
    width: 100%;
    max-width: 50rem;
    min-width: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    z-index: 2;
    margin-top: -3rem;
    @media (max-width: 500px) {
        width: 19.5em;
        gap: 1rem;
    }
`;

export const FormTitle = styled.h1`
    display: flex;
    flex-direction: row;
    color: #143642;
    font-weight: 600;
    margin-bottom: 0;
    @media (max-width: 1080px) {
        font-size: 2em;
    }
    @media (max-width: 500px) {
        font-size: 1.25em;
    }
`;

export const FlexBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 3em;
    width: 100%;
    height: 100%;
    z-index: 1;
    @media (max-width: 1080px) {
        flex-direction: column !important;
        gap: 3em;
        justify-content: space-between;
    }
`;

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

export const DetailTextArea = styled.textarea`
    font-family: Montserrat, sans-serif;
    resize: none;
    height: 8rem;
    border: none;
    border-radius: 1em;
    background-color: #fff;
    width: 100%;
    padding: 2em;
    ::placeholder {
        color: #dedede;
    }
`;

export const SignUpButton = styled.button`
    width: 50%;
    height: 3em;
    font-weight: 600;
    font-size: large;
    color: white;
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

export const SignInButton = styled.button`
    font-weight: 500;
    font-size: large;
    color: #143642;
    width: 50%;
    border: none;
    background: none;
    padding: 1em;
    cursor: pointer;
    transition: opacity 0.3s;
    &:hover {
        opacity: 0.8;
    }
`;
