import { useTranslation } from 'next-i18next';
import { useSession } from 'next-auth/react';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { userApi } from '../../public/const';
import styled from 'styled-components';
import inputForm from '../AuthForm/inputForm';
import InputForm from '../AuthForm/inputForm';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

interface Props {
    field: any;
    value: any;
}

interface InputProps {
    type: string;
}

const Input = styled.input<InputProps>`
    height: 3rem;
    border: none;
    border-radius: 1em;
    background-color: ${props => (props.type === 'normal' ? '#ffffff' : '#F2F2F2')};
    width: 100%;
    padding: 2em;
`;

const Form = styled.form`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.button`
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
const AccountForm = ({ field, value }: Props) => {
    const { t } = useTranslation('common');
    const [type, setType] = useState<string>('normal');

    return (
        <>
            <Form onSubmit={() => {}}>
                <Input type={type} disabled={type === 'normal'} placeholder={value} />
                {type === 'normal' && (
                    <>
                        <Button
                            style={{ backgroundColor: '#e5bf00' }}
                            onClick={() => {
                                setType('edit');
                            }}>
                            <FontAwesomeIcon icon={faPen} />
                        </Button>
                    </>
                )}
                {type === 'edit' && (
                    <>
                        <Button
                            type={'submit'}
                            style={{ backgroundColor: '#27AE60' }}
                            onClick={() => {
                                setType('normal');
                            }}>
                            <FontAwesomeIcon icon={faCheck} />
                        </Button>
                        <Button
                            type={'button'}
                            style={{ backgroundColor: '#C0392B ' }}
                            onClick={() => {
                                setType('normal');
                            }}>
                            <FontAwesomeIcon icon={faTimes} />
                        </Button>
                    </>
                )}
            </Form>
        </>
    );
};

export default AccountForm;
