import React, { useState } from 'react';
import { DetailsContent, Items, ItemSection, SectionTitle } from '../RestaurantDetails/styles';
import { MenuModel } from '../../models/MenuModel';
import ItemCard from '../ItemCard/ItemCard';
import { ItemModel } from '../../models/ItemModel';
import { EditItems } from './styles';
import Button from '../globals/Button';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ItemForm from '../ItemCard/ItemForm';

interface Props {
    restaurantInfo: any;
    loading: boolean;
}

const MenusAndArticles = ({ restaurantInfo, loading }: Props) => {
    const [newItem, setNewItem] = useState<boolean>(false);
    console.log(restaurantInfo);
    return (
        <DetailsContent>
            {!loading && (
                <>
                    <SectionTitle>Menus</SectionTitle>
                    {/*<Items>*/}
                    {/*    {restaurantInfo.menus.map((menu: MenuModel) => (*/}
                    {/*        <ItemCard key={menu._id} menu={menu} onClick={() => {}} shop={false} edit={true}></ItemCard>*/}
                    {/*    ))}*/}
                    {/*</Items>*/}
                    <SectionTitle style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '2rem' }}>
                        Items
                        <Button
                            text="New Item"
                            small={false}
                            backgroundColor="#E5BF00"
                            icon={faPlus}
                            onClick={() => {
                                setNewItem(true);
                            }}></Button>
                    </SectionTitle>
                    <Items>
                        {restaurantInfo.items.map((item: MenuModel) => (
                            <ItemCard key={item._id} item={item} onClick={() => {}} shop={false} edit={true}></ItemCard>
                        ))}
                    </Items>
                </>
            )}
            {newItem && <ItemForm setIsEditing={setNewItem} />}
        </DetailsContent>
    );
};

export default MenusAndArticles;
