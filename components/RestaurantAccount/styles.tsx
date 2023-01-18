import styled from 'styled-components';
import { inputProps } from '../AccountCard/AccountForm';

export const AccountWrapper = styled.div`
    display: flex;
    gap: 2rem;
    overflow: hidden;
    height: 80%;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

export const InfoContainer = styled.div`
    position: relative;
    width: 40%;
    background: white;
    height: 100%;
    border-radius: 1em;

    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;

export const RestaurantImg = styled.img`
    object-fit: cover;
    border-radius: 1em;
    height: 14rem;
    width: 100%;
`;

export const InfoWrapper = styled.form`
    padding: 1rem;
    height: 100%;
    width: 100%;
`;

export const InfoTitle = styled.h2`
    color: #143642;
    margin: 0 auto 1rem;
`;

export const InfoDetails = styled.p`
    position: relative;
    font-weight: 600;
    font-size: 1rem;
    margin: 1rem 0.8rem;

    line-height: 1.28;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 11;
    text-overflow: ellipsis;
    overflow: hidden;
`;

export const SpaceBetween = styled.div`
    justify-content: space-between;
`;

export const ButtonsWrapper = styled.div`
    width: 100%;
    display: flex;
`;

export const DetailInput = styled.input<inputProps>`
    height: 3rem;
    font-size: medium;
    color: #143642;
    font-weight: 600;
    border: none;
    border-radius: 1em;
    background-color: ${props => (props.edit ? '#F2F2F2' : '#FFFFFF')};
    width: 100%;
    padding: 2em;
    ::placeholder {
        color: #143642;
    }
`;
export const DetailTextArea = styled.textarea<inputProps>`
    font-family: Montserrat, sans-serif;
    resize: none;
    height: 8rem;
    font-size: medium;
    color: #143642;
    font-weight: 600;
    border: none;
    border-radius: 1em;
    background-color: ${props => (props.edit ? '#F2F2F2' : '#FFFFFF')};
    width: 100%;
    padding: 2em;
    ::placeholder {
        color: #143642;
    }
`;

export const TitleInput = styled.input<inputProps>`
    height: 3rem;
    font-size: x-large;
    color: #143642;
    font-weight: 700;
    border: none;
    border-radius: 1rem;
    background-color: ${props => (props.edit ? '#F2F2F2' : '#FFFFFF')};
    width: 100%;
    ::placeholder {
        color: #143642;
    }
`;

export const EditItems = styled.div`
    display: flex;
    flex-direction: column;
`;
