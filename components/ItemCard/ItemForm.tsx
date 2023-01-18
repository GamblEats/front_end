import { useTranslation } from 'next-i18next';
import { signOut, useSession } from 'next-auth/react';
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { months, userApi } from '../../public/const';
import styled from 'styled-components';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPen, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import ConfirmModal from '../RestaurantDetails/ConfirmModal';
import { Buttons, SignInButton, SignUpButton } from '../AuthForm/styles';
import { BlurBg, Form, Input, InputList, InputRow, Title } from '../AccountCard/styles';
import { ItemModel } from '../../models/ItemModel';
import { categories } from '../../config/categories';
import { SelectForm } from './styles';
import { Details } from '../RestaurantDetails/styles';

export interface inputProps {
    edit: boolean;
}

interface Props {
    item?: ItemModel;
    setIsEditing: (value: boolean) => void;
}

const ItemForm = ({ item, setIsEditing }: Props) => {
    const { t } = useTranslation('common');

    const validationSchema = Yup.object({
        picture: Yup.string(),
        price: Yup.string(),
        name: Yup.string(),
        category: Yup.string(),
    });

    const formik = useFormik({
        initialValues: {
            picture: '',
            price: '',
            name: '',
            category: '',
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
            // axios
            //     .patch(`${userApi}/users/${session.user.id}`, cleanedValues, {
            //         headers: {
            //             'Content-Type': 'application/json',
            //         },
            //     })
            //     .then(() => {
            //         setEdit(false);
            //         toast.success(t('accountModified'));
            //     });
            console.log(cleanedValues);
        },
    });

    return (
        <>
            <BlurBg
                onClick={e => {
                    e.stopPropagation();
                    setIsEditing(false);
                }}>
                <Details
                    style={{ width: '40%', height: '70%' }}
                    onClick={e => {
                        e.stopPropagation();
                    }}>
                    <FontAwesomeIcon
                        color={'#E5BF00'}
                        icon={faTimes}
                        fontSize={'2rem'}
                        cursor={'pointer'}
                        style={{
                            position: 'absolute',
                            right: '1.5rem',
                            top: '1.5rem',
                            backdropFilter: 'blur(10px)',
                        }}
                        onClick={() => {
                            setIsEditing(false);
                        }}
                    />
                    <Form onSubmit={formik.handleSubmit} style={{ padding: '3rem', justifyContent: 'space-between' }}>
                        <InputRow>
                            <Title>{t('pictureUrl')}</Title>
                            <Input
                                name={'picture'}
                                edit={false}
                                placeholder={item ? item.pic : `${t('pictureUrl')}`}
                                value={formik.values.picture}
                                onChange={formik.handleChange}
                            />
                            <Title>{t('name')}</Title>
                            <Input
                                name={'name'}
                                edit={false}
                                placeholder={item ? item.name : `${t('name')}`}
                                value={formik.values.name}
                                onChange={formik.handleChange}
                            />
                            <Title>{t('price')}</Title>
                            <Input
                                name={'price'}
                                edit={false}
                                placeholder={item ? item.price + ' €' : `${t('price')}`}
                                value={formik.values.name}
                                onChange={formik.handleChange}
                            />
                            <Title>{t('category')}</Title>
                            <SelectForm
                                required
                                defaultValue={item ? item.category : `${t('category')}`}
                                name="category"
                                onChange={formik.handleChange}>
                                {categories.map(category => (
                                    <option key={category.name} value={category.name}>
                                        {category.name}
                                    </option>
                                ))}
                            </SelectForm>
                        </InputRow>
                        <Buttons>
                            <SignInButton
                                type="button"
                                onClick={() => {
                                    setIsEditing(false);
                                }}>
                                Annuler
                            </SignInButton>
                            <SignUpButton type="submit" disabled={!(formik.isValid && formik.dirty)} color={'#e5bf00'}>
                                Valider
                            </SignUpButton>
                        </Buttons>
                    </Form>
                </Details>
            </BlurBg>
        </>
    );
};

export default ItemForm;
