import styled from 'styled-components';
import { LangProps } from './SettingsCard';

export const Card = styled.div`
    background-color: white;
    border-radius: 2em;
    padding: 2em;
    display: flex;
`;
export const CardAccount = styled(Card)`
    position: relative;
    width: 70%;
`;
export const CardSettings = styled(Card)`
    flex-direction: column;
    gap: 2em;
    width: 30%;
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
