import styled from 'styled-components';
import { Buttons, SignUpButton, SignInButton } from '../AuthForm/styles';
import React from 'react';
import useStore from '../../store/useStore';

interface Props {
    confirmLabel: string;
    cancelLabel: string;
    label: string;
}

const BlurBg2 = styled.div`
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
    backdrop-filter: blur(400px);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: opacity 0.15s ease-in-out;
`;

const Modal = styled.div`
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

const Label = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ConfirmModal = ({ confirmLabel, cancelLabel, label }: Props) => {
    const { deleteCard, closeAsk } = useStore();
    return (
        <BlurBg2
            onClick={e => {
                e.stopPropagation();
            }}>
            <Modal onClick={e => e.stopPropagation()}>
                <Label> {label}</Label>
                <Buttons>
                    <SignInButton type="button" onClick={closeAsk}>
                        {cancelLabel}
                    </SignInButton>
                    <SignUpButton type="button" color={'#e5bf00'} onClick={deleteCard}>
                        {confirmLabel}
                    </SignUpButton>
                </Buttons>
            </Modal>
        </BlurBg2>
    );
};

export default ConfirmModal;
