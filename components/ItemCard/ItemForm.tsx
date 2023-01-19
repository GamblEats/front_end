import { useTranslation } from 'next-i18next';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { restaurantApi } from '../../public/const';
import { useFormik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { Buttons, SignInButton, SignUpButton } from '../AuthForm/styles';
import { BlurBg, Form, Input, InputRow, Title } from '../AccountCard/styles';
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
    validationSchema: any;
    getRestaurant: () => void;
}

const ItemForm = ({ item, setIsEditing, validationSchema, getRestaurant }: Props) => {
    const { t } = useTranslation('common');
    const { data: session }: any = useSession();

    const formik = useFormik({
        initialValues: {
            pic: '',
            price: '',
            description: '',
            name: '',
            category: '',
        },
        validationSchema,
        onSubmit: (values: any) => {
            values.restaurant = session.user.restaurantId;
            const cleanedValues = Object.entries(values)
                .filter(([key, value]) => value !== '')
                .reduce((obj, [key, value]) => {
                    // @ts-ignore
                    obj[key] = value;
                    return obj;
                }, {});
            item
                ? axios
                      .patch(`${restaurantApi}/items/${item.id}`, cleanedValues, {
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
                      .post(`${restaurantApi}/items`, cleanedValues, {
                          headers: {
                              'Content-Type': 'application/json',
                          },
                      })
                      .then(() => {
                          getRestaurant();
                          setIsEditing(false);
                          toast.success(t('accountModified'));
                      });
        },
    });

    console.log(formik.isValid);

    return (
        <>
            <BlurBg
                onClick={e => {
                    e.stopPropagation();
                    setIsEditing(false);
                }}>
                <Details
                    style={{ width: '40%', height: '80%' }}
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
                                name={'pic'}
                                edit={false}
                                placeholder={item ? item.pic : `${t('pictureUrl')}`}
                                value={formik.values.pic}
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
                                value={formik.values.price}
                                onChange={formik.handleChange}
                            />
                            <Title>{'Description'}</Title>
                            <Input
                                name={'description'}
                                edit={false}
                                placeholder={item ? item.description : `Description`}
                                value={formik.values.description}
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
                                {t('cancel')}
                            </SignInButton>
                            <SignUpButton type="submit" disabled={!(formik.isValid && formik.dirty)} color={'#e5bf00'}>
                                {t('confirm')}
                            </SignUpButton>
                        </Buttons>
                    </Form>
                </Details>
            </BlurBg>
        </>
    );
};

export default ItemForm;
