import { Buttons, Form, FormTitle, SignInButton, SignUpButton } from './styles';
import InputForm from './inputForm';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import axios from 'axios';
import { toast } from 'react-toastify';
import { signIn } from 'next-auth/react';

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
        onSubmit,
    });

    async function onSubmit(values: any) {
        const status: any = await signIn('credentials', {
            redirect: false,
            email: values.email,
            password: values.password,
            callbackUrl: '/home',
        });
        if (status.ok) {
            router.push(status.url);
        }
    }

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
