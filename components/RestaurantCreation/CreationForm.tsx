import { Buttons, DetailTextArea, Form, FormTitle, InputWraper, SignInButton, SignUpButton } from './styles';
import {
    faEnvelope,
    faLock,
    faPenNib,
    faPhone,
    faLocationDot,
    faCircleInfo,
    faUserGroup,
    faCity,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import axios from 'axios';
import { toast } from 'react-toastify';
import { restaurantApi } from '../../public/const';
import InputForm from '../AuthForm/inputForm';
import Button from '../globals/Button';

interface Props {
    sessionUser: any;
}

const CreationForm = ({ sessionUser }: Props) => {
    const [clicked, setClicked] = useState(false);
    const router = useRouter();
    const { t } = useTranslation('common');
    const validationSchema = Yup.object({
        name: Yup.string().required(`${t('required')}`),
        pic: Yup.string().required(`${t('required')}`),
        description: Yup.string().required(`${t('required')}`),
        address: Yup.string().required(`${t('required')}`),
        deliveryPrice: Yup.number().required(`${t('required')}`),
        postalCode: Yup.string().required(`${t('required')}`),
        city: Yup.string().required(`${t('required')}`),
    });
    const formik = useFormik({
        initialValues: {
            name: '',
            pic: '',
            description: '',
            email: '',
            address: '',
            deliveryPrice: null,
            postalCode: '',
            city: '',
        },
        validationSchema,
        onSubmit: (values: any) => {
            try {
                axios
                    .post(restaurantApi + '/restaurants', values, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                    .then(() => {
                        toast.success(t('successRestaurants'));
                        router.replace({
                            query: { ...router.query, form: 'signIn' },
                        });
                    })
                    .catch(error => {
                        toast.error(t('errorRestaurant'));
                    });
            } catch (error) {
                toast.error(t('errorRestaurant'));
            }
        },
    });

    return (
        <React.Fragment>
            {!clicked && (
                <React.Fragment>
                    <FormTitle style={{ marginBottom: '2rem' }}>{t('noRestaurant')}</FormTitle>
                    <Button
                        backgroundColor={'#e5bf00'}
                        text={t('createARestaurant')}
                        small={false}
                        icon={faPlus}
                        onClick={() => setClicked(!clicked)}
                    />
                </React.Fragment>
            )}
            {clicked && (
                <Form onSubmit={formik.handleSubmit}>
                    <FormTitle>
                        <div>
                            <p>{t('createARestaurant')}</p>
                        </div>
                    </FormTitle>{' '}
                    <InputForm name="name" formik={formik} placeholder={t('name')} icon={faPenNib} />
                    <InputForm name="pic" formik={formik} placeholder={t('pic')} icon={faPenNib} />
                    <DetailTextArea name="description" formik={formik} placeholder={t('description')} icon={faPenNib} />
                    <InputWraper>
                        <InputForm
                            name="deliveryPrice"
                            formik={formik}
                            placeholder={t('deliveryPrice')}
                            icon={faPhone}
                        />
                        <InputForm name="categories" formik={formik} placeholder={t('categories')} icon={faUserGroup} />
                    </InputWraper>
                    <InputForm name="address" formik={formik} placeholder={t('address')} icon={faLocationDot} />
                    <InputWraper>
                        <InputForm name="postalCode" formik={formik} placeholder={t('postalCode')} icon={faCity} />
                        <InputForm name="city" formik={formik} placeholder={t('city')} icon={faCity} />
                    </InputWraper>
                    <Buttons>
                        <SignInButton
                            type="button"
                            onClick={() => {
                                setClicked(!clicked);
                            }}>
                            {t('cancel')}
                        </SignInButton>
                        <SignUpButton type="submit" disabled={!(formik.isValid && formik.dirty)} color={'#27AE60'}>
                            {t('validate')}
                        </SignUpButton>
                    </Buttons>
                </Form>
            )}
        </React.Fragment>
    );
};

export default CreationForm;
