import React, { useState } from 'react';
import { DetailsContent, Items, ItemSection, SectionTitle } from '../RestaurantDetails/styles';
import { MenuModel } from '../../models/MenuModel';
import ItemCard from '../ItemCard/ItemCard';
import { ItemModel } from '../../models/ItemModel';
import { EditItems } from './styles';
import Button from '../globals/Button';
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import ItemForm from '../ItemCard/ItemForm';
import * as Yup from 'yup';
import { ButtonForm } from '../AccountCard/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'next-i18next';

interface Props {
    restaurantInfo: any;
    loading: boolean;
    getRestaurant: () => void;
}

const MenusAndArticles = ({ restaurantInfo, loading, getRestaurant }: Props) => {
    const { t } = useTranslation('common');
    const validationSchema = Yup.object({
        description: Yup.string(),
        pic: Yup.string().required(),
        price: Yup.number().required(),
        name: Yup.string().required(),
        category: Yup.string().required(),
    });
    const [newItem, setNewItem] = useState<boolean>(false);
    return (
        <DetailsContent>
            {!loading && (
                <>
                    <SectionTitle
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: '2rem',
                        }}>
                        {t('menus')}
                        <ButtonForm
                            type={'button'}
                            style={{ backgroundColor: '#e5bf00' }}
                            onClick={() => {
                                setNewItem(true);
                            }}>
                            <FontAwesomeIcon icon={faPlus} />
                        </ButtonForm>
                    </SectionTitle>

                    {/*<Items>*/}
                    {/*    {restaurantInfo.menus.map((menu: MenuModel) => (*/}
                    {/*        <ItemCard key={menu._id} menu={menu} onClick={() => {}} shop={false} edit={true}></ItemCard>*/}
                    {/*    ))}*/}
                    {/*</Items>*/}
                    <SectionTitle
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: '2rem',
                        }}>
                        {t('items')}
                        <ButtonForm
                            type={'button'}
                            style={{ backgroundColor: '#e5bf00' }}
                            onClick={() => {
                                setNewItem(true);
                            }}>
                            <FontAwesomeIcon icon={faPlus} />
                        </ButtonForm>
                    </SectionTitle>
                    <Items>
                        {restaurantInfo.items.map((item: ItemModel) => (
                            <ItemCard
                                key={item.id}
                                item={item}
                                onClick={() => {}}
                                shop={false}
                                edit={true}
                                getRestaurant={getRestaurant}></ItemCard>
                        ))}
                    </Items>
                </>
            )}
            {newItem && (
                <ItemForm setIsEditing={setNewItem} validationSchema={validationSchema} getRestaurant={getRestaurant} />
            )}
        </DetailsContent>
    );
};

export default MenusAndArticles;
