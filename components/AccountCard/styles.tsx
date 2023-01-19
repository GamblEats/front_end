import styled from 'styled-components';
import { LangProps } from './SettingsCard';
import { inputProps } from './AccountForm';

export const Card = styled.div`
    background-color: white;
    border-radius: 2em;
    padding: 2em;
    display: flex;
`;
export const CardAccount = styled(Card)`
    position: relative;
    width: 70%;
    @media (max-width: 1000px) {
        width: 100%;
    }
`;
export const CardSettings = styled(Card)`
    flex-direction: column;
    gap: 2em;
    width: 30%;
    @media (max-width: 1000px) {
        width: 100%;
    }
`;

// --- Account Card --- //

export const SectionTitle = styled.div`
    color: #143642;
    font-weight: 500;
    font-size: 1.4em;
    margin-bottom: 1em;
`;
export const SectionText = styled.div`
    color: #143642;
`;

export const PhotoSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5em;
`;
export const PhotoContainer = styled.div`
    width: 14em;
    height: 14em;
`;
export const UserPhoto = styled.img`
    border-radius: 1.3em;
    height: 100%;
    width: 100%;
`;
export const PhotoButtons = styled.div`
    display: flex;
    gap: 1.5em;
`;

// --- Settings Card --- //

export const SwitchLangContainer = styled.div`
    background-color: #f2f2f2;
    border-radius: 1.2em;
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    cursor: pointer;
    @media (max-width: 1200px) {
        flex-direction: column;
    }
`;
export const LangContainer = styled.div<LangProps>`
    display: flex;
    align-items: center;
    gap: 0.8em;
    padding: 1em;
    border-radius: 1rem;
    margin: 0.5rem;
    background-color: ${props => (props.backGround ? 'white' : 'none')};
`;
export const LangImg = styled.img`
    width: 1.8em;
`;

export const NotificationsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
`;
export const NotificationContainer = styled.div`
    display: flex;
    background-color: #f2f2f2;
    padding: 1em;
    border-radius: 1.2em;
    text-align: center;
`;
export const NotificationCheckbox = styled.input`
    border-radius: 1em;
    margin-right: 1em;
    &[type='checkbox'] {
        width: 2em;
        height: 2em;
        border-radius: 1em;
        border: 0.15em solid red;
        color: red;
    }
    &[type='checkbox']:checked::before {
        transform: scale(1.7);
    }
    &[type='checkbox']::before {
        content: '';
        width: 0.65em;
        height: 0.65em;
    }
`;

export const Input = styled.input<inputProps>`
    height: 3rem;
    border: none;
    border-radius: 1em;
    background-color: ${props => (props.edit ? '#F2F2F2' : '#FFFFFF')};
    width: 100%;
    padding: 2em;
`;
export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
`;

export const InputList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 1.2rem;
`;

export const Title = styled.div`
    font-size: x-large;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 1.2rem;
`;

export const InputRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
export const ButtonForm = styled.button`
    color: white;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    display: flex;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
    transition: opacity 0.3s, background-color 0.2s ease-in-out;
    &:hover {
        opacity: 0.8;
    }
`;
export const Buttons = styled.div`
    top: 1rem;
    right: 1rem;
    position: absolute;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
`;

export const EditButton = styled.button`
    top: 0;
    right: 0;
    position: absolute;
    color: white;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    display: flex;
    border-radius: 0 1rem 0 1rem;
    border: none;
    cursor: pointer;
    transition: opacity 0.3s, background-color 0.2s ease-in-out;
    &:hover {
        opacity: 0.8;
    }
`;

export const DeleteButton = styled.button`
    bottom: 0;
    right: 0;
    position: absolute;
    color: white;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 3rem;
    display: flex;
    border-radius: 1rem 0 1rem 0;
    border: none;
    cursor: pointer;
    transition: opacity 0.3s, background-color 0.2s ease-in-out;
    &:hover {
        opacity: 0.8;
    }
`;

export const BlurBg = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 60;
    display: flex;
    height: 100%;
    cursor: default;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.24);
    backdrop-filter: blur(10px);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: opacity 0.15s ease-in-out;
`;

export const Modal = styled.div`
    position: inherit;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #f2f2f2;
    width: 40%;
    z-index: 61;
    border-radius: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
    padding: 2rem;
`;

export const Label = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonsModal = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;
