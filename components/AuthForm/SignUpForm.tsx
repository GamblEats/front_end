import { Buttons, Form, FormTitle, SignInButton, SignUpButton } from './styles';
import InputForm from './inputForm';
import { faEnvelope, faLock, faPenNib, faPhone } from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import axios from "axios";

const SignUpForm = () => {
    const router = useRouter();
    const { t } = useTranslation('common');
    const validationSchema = Yup.object({
        firstName: Yup.string().required(`${t('required')}`),
        lastName: Yup.string().required(`${t('required')}`),
        phone: Yup.string()
            .matches(/^0\d{9}$/, `${t('phoneMatch')}`)
            .required(`${t('required')}`),
        email: Yup.string()
            .email(`${t('invalidEmail')}`)
            .required(`${t('required')}`),
        password: Yup.string()
            .min(8, `${t('passwordLength')}`)
            .required(`${t('required')}`),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], `${t('passwordMatch')}`)
            .required(`${t('required')}`),
    });
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema,
        onSubmit: (values: any) => {
            delete values.confirmPassword;
            try {
                axios.post('http://127.0.0.1:8000/user/sign-up', values, {
                    headers: {
                        'Content-Type': 'application/json',
                    }}).then( responce => {
                        console.log(responce)
                    }
                ).then(response => {
                    console.log(response);
                })
            }catch (error){
                console.log(error);
            }
        },
    });

    return (
        <>
            <Form onSubmit={formik.handleSubmit}>
                <FormTitle> {t('signUp')}</FormTitle>
                <InputForm name="firstName" formik={formik} placeholder={t('firstName')} icon={faPenNib} />
                <InputForm name="lastName" formik={formik} placeholder={t('lastName')} icon={faPenNib} />
                <InputForm name="phone" formik={formik} placeholder={t('phone')} icon={faPhone} />
                <InputForm name="email" formik={formik} placeholder={t('email')} icon={faEnvelope} />
                <InputForm
                    type={'password'}
                    name="password"
                    formik={formik}
                    placeholder={t('password')}
                    icon={faLock}
                />
                <InputForm
                    type={'password'}
                    name="confirmPassword"
                    formik={formik}
                    placeholder={t('confirmPassword')}
                    icon={faLock}
                />
                <Buttons>
                    <SignInButton
                        type="button"
                        onClick={() => {
                            router.replace({
                                query: { ...router.query, form: 'signIn' },
                            });
                        }}>
                        {t('signIn')}
                    </SignInButton>
                    <SignUpButton type="submit" disabled={!(formik.isValid && formik.dirty)} color={'#e5bf00'}>
                        {t('signUp')}
                    </SignUpButton>
                </Buttons>
            </Form>
        </>
    );
};

export default SignUpForm;
