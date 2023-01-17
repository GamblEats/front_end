import { useTranslation } from 'next-i18next';
import { useSession } from 'next-auth/react';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { userApi } from '../../public/const';
import EditAccount from './EditAccount';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPen, faTimes } from '@fortawesome/free-solid-svg-icons';

interface InputProps {
    edit: boolean;
}

const Accountainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 1.2rem;
`;

const Input = styled.input<InputProps>`
    height: 3rem;
    border: none;
    border-radius: 1em;
    background-color: ${props => (props.edit ? '#F2F2F2' : '#FFFFFF')};
    width: 100%;
    padding: 2em;
`;

const Name = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 1.2rem;
`;

const Title = styled.div`
    font-size: x-large;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 1.2rem;
`;

const InputRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;
const Button = styled.button`
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
const Buttons = styled.div`
    bottom: 2rem;
    right: 2rem;
    position: absolute;
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
`;

const EditButton = styled.button`
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

const AccountForm = () => {
    const { t } = useTranslation('common');
    const { data: session }: any = useSession();
    const [userInfo, setUserInfo] = useState<any>(null);
    const [load, setLoad] = useState<boolean>(true);
    const [edit, setEdit] = useState<boolean>(false);

    const isInitialMount = useRef(true);

    async function getUser() {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            await axios.get(`${userApi}/users/${session.user.id}`).then(resp => {
                setUserInfo(resp.data);
                setLoad(false);
            });
        }
    }
    useEffect(() => {
        getUser();
    }, []);

    const validationSchema = Yup.object({
        firstName: Yup.string().required(`${t('required')}`),
        phone: Yup.string().matches(/^0\d{9}$/, `${t('phoneMatch')}`),
        email: Yup.string().email(`${t('invalidEmail')}`),
        password: Yup.string().min(8, `${t('passwordLength')}`),
        address: Yup.string(),
        additional: Yup.string(),
        city: Yup.string(),
        postalCode: Yup.string(),
    });

    const formik = useFormik({
        initialValues: {
            firstName: userInfo && userInfo.firstName,
            lastName: userInfo && userInfo.lastName,
            // phone: userInfo && userInfo.lastName,
            email: userInfo && userInfo.mail,
            password: '',
            address: userInfo && userInfo.address,
            additional: userInfo && userInfo.additional,
            city: userInfo && userInfo.city,
            postalCode: userInfo && userInfo.postalCode,
        },
        validationSchema,
        onSubmit: (values: any) => {
            console.log(values);
        },
    });

    console.log(session);

    return (
        <>
            {!load && (
                <Accountainer>
                    {!edit && (
                        <>
                            <EditButton
                                style={{ backgroundColor: '#e5bf00' }}
                                onClick={() => {
                                    setEdit(true);
                                }}>
                                <FontAwesomeIcon icon={faPen} />
                            </EditButton>
                        </>
                    )}
                    {edit && (
                        <Buttons>
                            <Button
                                type={'submit'}
                                style={{ backgroundColor: '#27AE60' }}
                                onClick={() => {
                                    setEdit(false);
                                }}>
                                <FontAwesomeIcon icon={faCheck} />
                            </Button>
                            <Button
                                type={'button'}
                                style={{ backgroundColor: '#C0392B ' }}
                                onClick={() => {
                                    setEdit(false);
                                }}>
                                <FontAwesomeIcon icon={faTimes} />
                            </Button>
                        </Buttons>
                    )}
                    <InputRow>
                        <Title>Name</Title>
                        <Name>
                            <Input edit={edit} disabled={!edit} placeholder={userInfo.firstName} />
                            <Input edit={edit} disabled={!edit} placeholder={userInfo.lastName} />
                        </Name>
                    </InputRow>
                </Accountainer>
            )}
        </>
    );
};

export default AccountForm;
