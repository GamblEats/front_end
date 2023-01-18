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
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
    role: string;
}
const SignInForm = ({ role }: Props) => {
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
            role: role,
        });
        if (status.ok) {
            switch (role) {
                case 'deliverer':
                    await router.push('/deliveries');
                    break;
                case 'restaurant':
                    await router.push('/orders');
                    break;
                default:
                    await router.push('/home');
                    break;
            }
        } else {
            toast.error(t('errorLog'));
        }
    }

    return (
        <>
            <Form onSubmit={formik.handleSubmit}>
                <FormTitle>
                    <div>
                        <p>{t('signIn')}</p>
                        {role !== 'client' && (
                            <p>
                                {t('as')}
                                {t(role)}
                            </p>
                        )}
                    </div>
                </FormTitle>
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
