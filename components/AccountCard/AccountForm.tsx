import { useTranslation } from 'next-i18next';
import { signOut, useSession } from 'next-auth/react';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { userApi } from '../../public/const';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPen, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import {
    BlurBg,
    ButtonForm,
    Buttons,
    ButtonsModal,
    DeleteButton,
    EditButton,
    Form,
    Input,
    InputList,
    InputRow,
    Label,
    Modal,
    Title,
} from './styles';
import ConfirmModal from '../RestaurantDetails/ConfirmModal';
import { SignInButton, SignUpButton } from '../AuthForm/styles';
export interface inputProps {
    edit: boolean;
}

const AccountForm = () => {
    const { t } = useTranslation('common');
    const [deleteAccount, setDeleteAccount] = useState<boolean>(false);
    const { data: session }: any = useSession();
    const [userInfo, setUserInfo] = useState<any>({
        firstName: '',
        lastName: '',
        phone: '',
        mail: '',
        address: '',
        additional: '',
        city: '',
        postalCode: '',
    });
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
        firstName: Yup.string(),
        lastName: Yup.string(),
        phone: Yup.string(),
        mail: Yup.string(),
        address: Yup.string(),
        additional: Yup.string(),
        city: Yup.string(),
        postalCode: Yup.string(),
    });

    const myFormik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phone: '',
            mail: '',
            address: '',
            additional: '',
            city: '',
            postalCode: '',
        },
        validationSchema,
        onSubmit: (values: any) => {
            const cleanedValues = Object.entries(values)
                .filter(([key, value]) => value !== '')
                .reduce((obj, [key, value]) => {
                    // @ts-ignore
                    obj[key] = value;
                    return obj;
                }, {});
            axios
                .patch(`${userApi}/users/${session.user.id}`, cleanedValues, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(() => {
                    setEdit(false);
                    toast.success(t('accountModified'));
                });
        },
    });

    return (
        <>
            {!load && (
                <Form onSubmit={myFormik.handleSubmit}>
                    <InputRow>
                        <Title>{t('name')}</Title>
                        <InputList>
                            <Input
                                name={'firstName'}
                                edit={edit}
                                disabled={!edit}
                                placeholder={userInfo.firstName}
                                value={myFormik.values.firstName}
                                onChange={myFormik.handleChange}
                            />
                            <Input
                                name={'lastName'}
                                edit={edit}
                                disabled={!edit}
                                placeholder={userInfo.lastName}
                                value={myFormik.values.lastName}
                                onChange={myFormik.handleChange}
                            />
                        </InputList>
                    </InputRow>
                    <InputRow>
                        <Title>{t('contact')}</Title>
                        <InputList>
                            <Input
                                name={'mail'}
                                edit={edit}
                                disabled={!edit}
                                placeholder={userInfo.mail}
                                value={myFormik.values.mail}
                                onChange={myFormik.handleChange}
                            />
                            <Input
                                name={'phone'}
                                edit={edit}
                                disabled={!edit}
                                placeholder={userInfo.phone}
                                value={myFormik.values.phone}
                                onChange={myFormik.handleChange}
                            />
                        </InputList>
                    </InputRow>
                    <InputRow>
                        <Title>{t('address')}</Title>
                        <InputList>
                            <Input
                                name={'address'}
                                edit={edit}
                                disabled={!edit}
                                placeholder={userInfo.address}
                                value={myFormik.values.address}
                                onChange={myFormik.handleChange}
                            />
                            <Input
                                name={'additional'}
                                edit={edit}
                                disabled={!edit}
                                placeholder={userInfo.additional}
                                value={myFormik.values.additional}
                                onChange={myFormik.handleChange}
                            />
                        </InputList>
                        <InputList>
                            <Input
                                name={'city'}
                                edit={edit}
                                disabled={!edit}
                                placeholder={userInfo.city}
                                value={myFormik.values.city}
                                onChange={myFormik.handleChange}
                            />
                            <Input
                                name={'postalCode'}
                                edit={edit}
                                disabled={!edit}
                                placeholder={userInfo.postalCode}
                                value={myFormik.values.postalCode}
                                onChange={myFormik.handleChange}
                            />
                        </InputList>
                    </InputRow>
                    {!edit && (
                        <>
                            <EditButton
                                type={'button'}
                                style={{ backgroundColor: '#e5bf00' }}
                                onClick={() => {
                                    setEdit(true);
                                }}>
                                <FontAwesomeIcon icon={faPen} />
                            </EditButton>
                            <DeleteButton
                                type={'button'}
                                style={{ backgroundColor: '#C0392B' }}
                                onClick={() => {
                                    setDeleteAccount(true);
                                }}>
                                <FontAwesomeIcon icon={faTrash} />
                            </DeleteButton>
                        </>
                    )}
                    {edit && (
                        <Buttons>
                            <ButtonForm
                                type={'submit'}
                                disabled={!(myFormik.isValid && myFormik.dirty)}
                                style={{ backgroundColor: '#27AE60' }}>
                                <FontAwesomeIcon icon={faCheck} />
                            </ButtonForm>
                            <ButtonForm
                                type={'button'}
                                style={{ backgroundColor: '#C0392B' }}
                                onClick={() => {
                                    setEdit(false);
                                }}>
                                <FontAwesomeIcon icon={faTimes} />
                            </ButtonForm>
                        </Buttons>
                    )}
                    {deleteAccount && (
                        <BlurBg
                            onClick={e => {
                                e.stopPropagation();
                            }}>
                            <Modal onClick={e => e.stopPropagation()}>
                                <Label> {t('deleteConfirm')}</Label>
                                <ButtonsModal>
                                    <SignInButton
                                        type="button"
                                        onClick={() => {
                                            setDeleteAccount(false);
                                        }}>
                                        {t('no')}
                                    </SignInButton>
                                    <SignUpButton
                                        type="button"
                                        color={'#e5bf00'}
                                        onClick={() => {
                                            axios
                                                .delete(`${userApi}/users/${session.user.id}`, {
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                    },
                                                })
                                                .then(() => {
                                                    signOut();
                                                });
                                        }}>
                                        {t('yes')}
                                    </SignUpButton>
                                </ButtonsModal>
                            </Modal>
                        </BlurBg>
                    )}
                </Form>
            )}
        </>
    );
};

export default AccountForm;
