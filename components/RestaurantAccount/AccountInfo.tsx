import React from 'react';
import {
    DetailInput,
    DetailTextArea,
    InfoContainer,
    InfoDetails,
    InfoWrapper,
    RestaurantImg,
    SpaceBetween,
    TitleInput,
} from './styles';
import { useTranslation } from 'next-i18next';
import { signOut, useSession } from 'next-auth/react';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { restaurantApi, userApi } from '../../public/const';
import {
    faLocationDot,
    faClock,
    faBellConcierge,
    faCircleInfo,
    faCheck,
    faTimes,
    faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import {
    Buttons,
    EditButton,
    ButtonForm,
    DeleteButton,
    Modal,
    Label,
    ButtonsModal,
    BlurBg,
} from '../AccountCard/styles';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { SignInButton, SignUpButton } from '../AuthForm/styles';

interface Props {
    restaurantInfo: any;
    loading: boolean;
}
export interface inputProps {
    edit: boolean;
}

const AccountInfo = ({ restaurantInfo, loading }: Props) => {
    const { t } = useTranslation('common');
    const { data: session }: any = useSession();

    const [edit, setEdit] = useState<boolean>(false);
    const [deleteRestaurant, setDeleteRestaurant] = useState<boolean>(false);

    const validationSchema = Yup.object({
        name: Yup.string(),
        address: Yup.string(),
        hours: Yup.string(),
        deliveryPrice: Yup.string(),
        description: Yup.string(),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            address: '',
            hours: '',
            deliveryPrice: '',
            description: '',
        },
        validationSchema,
        onSubmit: (values: any) => {
            delete values.hours;
            const cleanedValues = Object.entries(values)
                .filter(([key, value]) => value !== '')
                .reduce((obj, [key, value]) => {
                    // @ts-ignore
                    obj[key] = value;
                    return obj;
                }, {});
            axios
                .patch(`${restaurantApi}/restaurants/${session.user.restaurantId}`, cleanedValues, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(() => {
                    setEdit(false);
                    toast.success(t('restaurantModified'));
                });
        },
    });

    return (
        <InfoContainer>
            {!loading && (
                <React.Fragment>
                    <SpaceBetween>
                        <RestaurantImg src={restaurantInfo.pic} />
                        <InfoWrapper onSubmit={formik.handleSubmit}>
                            <InfoDetails>
                                <TitleInput
                                    name={'name'}
                                    edit={edit}
                                    disabled={!edit}
                                    placeholder={restaurantInfo.name}
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                />
                            </InfoDetails>
                            <InfoDetails>
                                <FontAwesomeIcon
                                    icon={faLocationDot}
                                    style={{
                                        width: '1rem',
                                        color: '#143642',
                                        marginRight: '0.8rem',
                                        position: 'absolute',
                                        top: '50%',
                                        left: 0,
                                        transform: 'translate(0, -50%)',
                                    }}
                                />
                                <DetailInput
                                    name={'address'}
                                    edit={edit}
                                    disabled={!edit}
                                    placeholder={restaurantInfo.address}
                                    value={formik.values.address}
                                    onChange={formik.handleChange}
                                />
                            </InfoDetails>
                            <InfoDetails>
                                <FontAwesomeIcon
                                    icon={faClock}
                                    style={{
                                        width: '1rem',
                                        color: '#143642',
                                        marginRight: '0.8rem',
                                        position: 'absolute',
                                        top: '50%',
                                        left: 0,
                                        transform: 'translate(0, -50%)',
                                    }}
                                />
                                <DetailInput
                                    name={'hours'}
                                    edit={edit}
                                    disabled={!edit}
                                    placeholder={'10h00 - 14h00 / 18h00 - 22h00'}
                                    value={formik.values.hours}
                                    onChange={formik.handleChange}
                                />
                            </InfoDetails>
                            <InfoDetails>
                                <FontAwesomeIcon
                                    icon={faBellConcierge}
                                    style={{
                                        width: '1rem',
                                        color: '#143642',
                                        marginRight: '0.8rem',
                                        position: 'absolute',
                                        top: '50%',
                                        left: 0,
                                        transform: 'translate(0, -50%)',
                                    }}
                                />
                                <DetailInput
                                    name={'deliveryPrice'}
                                    edit={edit}
                                    disabled={!edit}
                                    placeholder={restaurantInfo.deliveryPrice + ' €'}
                                    value={formik.values.deliveryPrice}
                                    onChange={formik.handleChange}
                                />
                            </InfoDetails>
                            <InfoDetails>
                                <FontAwesomeIcon
                                    icon={faCircleInfo}
                                    style={{
                                        width: '1rem',
                                        color: '#143642',
                                        marginRight: '0.8rem',
                                        position: 'absolute',
                                        top: '2.2em',
                                        left: 0,
                                        transform: 'translate(0, -50%)',
                                    }}
                                />
                                <DetailTextArea
                                    name={'description'}
                                    edit={edit}
                                    disabled={!edit}
                                    placeholder={restaurantInfo.description}
                                    value={formik.values.description}
                                    onChange={formik.handleChange}
                                />

                                {}
                            </InfoDetails>
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
                                            setDeleteRestaurant(true);
                                        }}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </DeleteButton>
                                </>
                            )}
                            {edit && (
                                <Buttons>
                                    <ButtonForm
                                        type={'submit'}
                                        disabled={!(formik.isValid && formik.dirty)}
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
                        </InfoWrapper>
                        {deleteRestaurant && (
                            <BlurBg
                                onClick={e => {
                                    e.stopPropagation();
                                }}>
                                <Modal onClick={e => e.stopPropagation()}>
                                    <Label> {t('deleteConfirmRestaurant')}</Label>
                                    <ButtonsModal>
                                        <SignInButton
                                            type="button"
                                            onClick={() => {
                                                setDeleteRestaurant(false);
                                            }}>
                                            {t('no')}
                                        </SignInButton>
                                        <SignUpButton
                                            type="button"
                                            color={'#e5bf00'}
                                            onClick={() => {
                                                axios.delete(
                                                    `${restaurantApi}/restaurants/${session.user.restaurantId}`,
                                                    {
                                                        headers: {
                                                            'Content-Type': 'application/json',
                                                        },
                                                    }
                                                );
                                            }}>
                                            {t('yes')}
                                        </SignUpButton>
                                    </ButtonsModal>
                                </Modal>
                            </BlurBg>
                        )}
                    </SpaceBetween>
                </React.Fragment>
            )}
        </InfoContainer>
    );
};

export default AccountInfo;
