import { Buttons, Form, FormTitle, SignInButton, SignUpButton } from './styles';
import InputForm from './inputForm';
import { faEnvelope, faLock, faPenNib, faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { interfaceDeclaration } from '@babel/types';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { router } from 'next/client';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const SignInForm = () => {
    const router = useRouter();
    const { t } = useTranslation('common');
    const validationSchema = Yup.object({
        email: Yup.string()
            .email(`${t('invalidEmail')}`)
            .required(`${t('required')}`),
        password: Yup.string()
            .min(8, `${t('passwordLength')}`)
            .required(`${t('required')}`),
    });
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: (values: any) => {
            console.log(values);
        },
    });
    return (
        <>
            <Form onSubmit={formik.handleSubmit}>
                <FormTitle> {t('signIn')}</FormTitle>
                <InputForm name="email" formik={formik} placeholder={t('email')} icon={faEnvelope} />
                <InputForm
                    type={'password'}
                    name="password"
                    formik={formik}
                    placeholder={t('password')}
                    icon={faLock}
                />
                <Buttons>
                    <SignInButton
                        type="button"
                        onClick={() => {
                            router.replace({
                                query: { ...router.query, form: 'signUp' },
                            });
                        }}>
                        {t('signUp')}
                    </SignInButton>
                    <SignUpButton type="submit" disabled={!(formik.isValid && formik.dirty)} color={'#e5bf00'}>
                        {t('signIn')}
                    </SignUpButton>
                </Buttons>
            </Form>
        </>
    );
};

export default SignInForm;
