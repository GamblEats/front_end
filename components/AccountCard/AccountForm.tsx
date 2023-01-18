import { useTranslation } from 'next-i18next';
import { useSession } from 'next-auth/react';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { userApi } from '../../public/const';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPen, faTimes } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { Button, Buttons, EditButton, Form, Input, InputList, InputRow, Title } from './styles';
export interface inputProps {
    edit: boolean;
}

const AccountForm = () => {
    const { t } = useTranslation('common');
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
                    toast.success('Compte modifié');
                });
        },
    });

    return (
        <>
            {!load && (
                <Form onSubmit={myFormik.handleSubmit}>
                    <InputRow>
                        <Title>Name</Title>
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
                        <Title>Contact</Title>
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
                        <Title>Address</Title>
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
                        </>
                    )}
                    {edit && (
                        <Buttons>
                            <Button
                                type={'submit'}
                                disabled={!(myFormik.isValid && myFormik.dirty)}
                                style={{ backgroundColor: '#27AE60' }}>
                                <FontAwesomeIcon icon={faCheck} />
                            </Button>
                            <Button
                                type={'button'}
                                style={{ backgroundColor: '#C0392B' }}
                                onClick={() => {
                                    setEdit(false);
                                }}>
                                <FontAwesomeIcon icon={faTimes} />
                            </Button>
                        </Buttons>
                    )}
                </Form>
            )}
        </>
    );
};

export default AccountForm;
