import { Buttons, Form, FormTitle, InputWraper, SignInButton, SignUpButton } from './styles';
import InputForm from './inputForm';
import {
    faEnvelope,
    faLock,
    faPenNib,
    faPhone,
    faLocationDot,
    faCircleInfo,
    faUserGroup,
    faCity,
} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import axios from 'axios';
import { toast } from 'react-toastify';
import { userApi } from '../../public/const';
import BackButton from '../globals/BackButton';
interface Props {
    role: string;
}

const SignUpForm = ({ role }: Props) => {
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
        address: Yup.string().required(`${t('required')}`),
        additional: Yup.string(),
        postalCode: Yup.string().required(`${t('required')}`),
        city: Yup.string().required(`${t('required')}`),
        password: Yup.string()
            .min(8, `${t('passwordLength')}`)
            .required(`${t('required')}`),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], `${t('passwordMatch')}`)
            .required(`${t('required')}`),
        referral: Yup.string(),
    });
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            address: '',
            additional: '',
            postalCode: '',
            city: '',
            password: '',
            confirmPassword: '',
            referral: '',
        },
        validationSchema,
        onSubmit: (values: any) => {
            delete values.confirmPassword;
            values.role = role;

            try {
                axios
                    .post(userApi + '/users/register', values, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                    .then(() => {
                        toast.success(t('successAccount'));
                        router.replace({
                            query: { ...router.query, form: 'signIn' },
                        });
                    })
                    .catch(error => {
                        toast.error(t('errorAccount'));
                    });
            } catch (error) {
                toast.error(t('errorAccount'));
            }
        },
    });

    return (
        <React.Fragment>
            <BackButton />
            <Form onSubmit={formik.handleSubmit}>
                <FormTitle>
                    <div>
                        <p>
                            {t('signUp')}
                            {role !== 'client' && (
                                <React.Fragment>
                                    {' '}
                                    {t('as')}
                                    {t(role)}
                                </React.Fragment>
                            )}
                        </p>
                    </div>
                </FormTitle>{' '}
                <InputWraper>
                    <InputForm name="firstName" formik={formik} placeholder={t('firstName')} icon={faPenNib} />
                    <InputForm name="lastName" formik={formik} placeholder={t('lastName')} icon={faPenNib} />
                </InputWraper>
                <InputWraper>
                    <InputForm name="phone" formik={formik} placeholder={t('phone')} icon={faPhone} />
                    <InputForm name="referral" formik={formik} placeholder={t('referralInput')} icon={faUserGroup} />
                </InputWraper>
                <InputForm name="email" formik={formik} placeholder={t('email')} icon={faEnvelope} />
                <InputForm name="address" formik={formik} placeholder={t('address')} icon={faLocationDot} />
                <InputForm name="additional" formik={formik} placeholder={t('additional')} icon={faCircleInfo} />
                <InputWraper>
                    <InputForm name="postalCode" formik={formik} placeholder={t('postalCode')} icon={faCity} />
                    <InputForm name="city" formik={formik} placeholder={t('city')} icon={faCity} />
                </InputWraper>
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
        </React.Fragment>
    );
};

export default SignUpForm;
