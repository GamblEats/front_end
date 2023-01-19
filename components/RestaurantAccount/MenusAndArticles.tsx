import React, { useState } from 'react';
import { DetailsContent, Items, SectionTitle } from '../RestaurantDetails/styles';
import ItemCard from '../ItemCard/ItemCard';
import { ItemModel } from '../../models/ItemModel';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ItemForm from '../ItemCard/ItemForm';
import * as Yup from 'yup';
import { ButtonForm } from '../AccountCard/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'next-i18next';
import { MenuModel } from '../../models/MenuModel';
import MenuForm from '../ItemCard/MenuForm';
import { log } from 'util';

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
    const validationSchemaMenu = Yup.object({
        description: Yup.string(),
        pic: Yup.string(),
        price: Yup.number(),
        name: Yup.string(),
    });
    const [newItem, setNewItem] = useState<boolean>(false);
    const [newMenu, setNewMenu] = useState<boolean>(false);

    return (
        <DetailsContent>
            {!loading && (
                <div style={{ overflow: 'scroll' }}>
                    {restaurantInfo.items.length > 0 && restaurantInfo.menus && (
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
                                        setNewMenu(true);
                                    }}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </ButtonForm>
                            </SectionTitle>
                            <Items>
                                {restaurantInfo.menus.map((menu: MenuModel, i: number) => (
                                    <ItemCard
                                        key={i}
                                        menu={menu}
                                        onClick={() => {}}
                                        shop={false}
                                        edit={true}
                                        restaurantItems={restaurantInfo.items}></ItemCard>
                                ))}
                            </Items>
                        </>
                    )}
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
                        {restaurantInfo.items.map((item: ItemModel, i: number) => (
                            <ItemCard
                                key={i}
                                item={item}
                                onClick={() => {}}
                                shop={false}
                                edit={true}
                                getRestaurant={getRestaurant}></ItemCard>
                        ))}
                    </Items>
                </div>
            )}
            {newItem && (
                <ItemForm setIsEditing={setNewItem} validationSchema={validationSchema} getRestaurant={getRestaurant} />
            )}
            {newMenu && (
                <MenuForm
                    setIsEditing={setNewMenu}
                    validationSchema={validationSchemaMenu}
                    getRestaurant={getRestaurant}
                    restaurantItems={restaurantInfo.items}
                />
            )}
        </DetailsContent>
    );
};

export default MenusAndArticles;
