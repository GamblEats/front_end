import { useTranslation } from 'next-i18next';
import { useSession } from 'next-auth/react';
import { useFormik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Buttons, SignInButton, SignUpButton } from '../AuthForm/styles';
import { BlurBg, ButtonForm, Input, InputRow, Title } from '../AccountCard/styles';
import { SelectForm } from './styles';
import { Details } from '../RestaurantDetails/styles';
import { MenuModel } from '../../models/MenuModel';
import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { restaurantApi } from '../../public/const';
import { toast } from 'react-toastify';

export interface inputProps {
    edit: boolean;
}

interface Props {
    menu?: MenuModel;
    setIsEditing: (value: boolean) => void;
    validationSchema: any;
    getRestaurant: () => void;
    restaurantItems: any;
}

const MenuInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`;
const MenuItems = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`;

const ItemCard = styled.div`
    border-radius: 1rem;
    padding-inline: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: white;
    height: 4rem;
    width: 40%;
    align-items: center;
`;

const ItemSelector = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
`;

const Menu = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
`;
const MenuForm = ({ menu, setIsEditing, validationSchema, getRestaurant, restaurantItems }: Props) => {
    const { t } = useTranslation('common');
    const { data: session }: any = useSession();
    const [itemsOfMenu, setItemsOfMenu] = useState<any>([]);
    const [addItem, setAddItem] = useState<any>([]);
    const [touched, setTouched] = useState<boolean>(false);

    useEffect(() => {
        if (menu) {
            setItemsOfMenu([...menu.items]);
        }
    }, []);

    const formik = useFormik({
        initialValues: {
            pic: '',
            price: '',
            description: '',
            name: '',
        },
        validationSchema,
        onSubmit: (values: any) => {
            values.restaurant = session.user.restaurantId;
            values.items = itemsOfMenu.map((item: any) => item.id);
            const cleanedValues = Object.entries(values)
                .filter(([key, value]) => value !== '')
                .reduce((obj, [key, value]) => {
                    // @ts-ignore
                    obj[key] = value;
                    return obj;
                }, {});
            try {
                menu
                    ? axios
                          .patch(`${restaurantApi}/menus/${menu.id}`, cleanedValues, {
                              headers: {
                                  'Content-Type': 'application/json',
                              },
                          })
                          .then(() => {
                              getRestaurant();
                              setIsEditing(false);
                              toast.success(t('accountModified'));
                          })
                    : axios
                          .post(`${restaurantApi}/menus`, cleanedValues, {
                              headers: {
                                  'Content-Type': 'application/json',
                              },
                          })
                          .then(() => {
                              getRestaurant();
                              setIsEditing(false);
                              toast.success(t('accountModified'));
                          });
            } catch (error) {}
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
                    style={{ display: 'flex', flexDirection: 'row' }}
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
                    <Menu
                        onSubmit={formik.handleSubmit}
                        style={{ padding: '3rem', display: 'flex', flexDirection: 'row' }}>
                        <MenuInfo>
                            <InputRow>
                                <Title>{t('pictureUrl')}</Title>
                                <Input
                                    name={'pic'}
                                    edit={false}
                                    placeholder={menu ? menu.pic : `${t('pictureUrl')}`}
                                    value={formik.values.pic}
                                    onChange={formik.handleChange}
                                />
                                <Title>{t('name')}</Title>
                                <Input
                                    name={'name'}
                                    edit={false}
                                    placeholder={menu ? menu.name : `${t('name')}`}
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                />
                                <Title>{t('price')}</Title>
                                <Input
                                    name={'price'}
                                    edit={false}
                                    placeholder={menu ? menu.price + ' €' : `${t('price')}`}
                                    value={formik.values.price}
                                    onChange={formik.handleChange}
                                />
                                <Title>{'Description'}</Title>
                                <Input
                                    name={'description'}
                                    edit={false}
                                    placeholder={menu ? menu.description : `Description`}
                                    value={formik.values.description}
                                    onChange={formik.handleChange}
                                />
                            </InputRow>
                        </MenuInfo>
                        <MenuItems>
                            <InputRow>
                                <Title>{t('items')}</Title>
                                <ItemSelector>
                                    <SelectForm
                                        style={{ width: '75%' }}
                                        defaultValue={''}
                                        name="items"
                                        onChange={e => {
                                            setTouched(true);
                                            setAddItem({ id: e.target.selectedOptions[0].id, name: e.target.value });
                                        }}>
                                        <option value="" disabled hidden>
                                            {t('addAnItem')}
                                        </option>
                                        {restaurantItems.map((item: any, i: number) => (
                                            <option key={i} value={item.name} id={item.id}>
                                                {item.name}
                                            </option>
                                        ))}
                                    </SelectForm>
                                    <ButtonForm
                                        type={'button'}
                                        style={{ backgroundColor: '#e5bf00' }}
                                        onClick={() => {
                                            setItemsOfMenu([...itemsOfMenu, addItem]);
                                        }}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </ButtonForm>
                                </ItemSelector>
                                {itemsOfMenu.map((item: any, i: number) => (
                                    <ItemCard key={i}>
                                        <p>{item.name}</p>
                                        <FontAwesomeIcon
                                            icon={faTimes}
                                            style={{ color: '#C0392B', cursor: 'pointer' }}
                                            onClick={() => {
                                                const itemTmp = [...itemsOfMenu];
                                                itemTmp.splice(itemTmp.indexOf(item), 1);
                                                setItemsOfMenu(itemTmp);
                                                setTouched(true);
                                            }}
                                        />
                                    </ItemCard>
                                ))}
                            </InputRow>
                        </MenuItems>

                        <Buttons style={{ width: '50%', position: 'absolute', bottom: '5%', right: '5%' }}>
                            <SignInButton
                                type="button"
                                onClick={() => {
                                    setIsEditing(false);
                                }}>
                                {t('cancel')}
                            </SignInButton>
                            <SignUpButton
                                type="submit"
                                disabled={!(formik.isValid && (formik.dirty || touched))}
                                color={'#e5bf00'}>
                                {t('confirm')}
                            </SignUpButton>
                        </Buttons>
                    </Menu>
                </Details>
            </BlurBg>
        </>
    );
};

export default MenuForm;
