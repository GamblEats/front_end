import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';
import { faBox, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useStore from '../../store/useStore';
import { shallow } from 'zustand/shallow';
import ConfirmModal from './ConfirmModal';
import { ItemModel } from '../../models/ItemModel';
import { Text } from '../../styles/globals';
import { CardRating } from '../RestaurantCard/styles';
import {
    BlurBg,
    Categorie,
    Details,
    DetailsContent,
    Info,
    Infos,
    Items,
    ItemSection,
    RestaurantAdditionalInfos,
    RestaurantImg,
    RestaurantInfos,
    RestaurantMenu,
    RestaurantTitle,
    SectionTitle,
    Separator,
    SideBar,
} from './styles';
import ItemCard from '../ItemCard/ItemCard';
import { MenuModel } from '../../models/MenuModel';

const RestInfo = styled.div`
    background-color: white;
    width: 20%;
    height: 100%;
    border-top-left-radius: 1em;
    border-bottom-left-radius: 1em;
`;

const BasketModal = styled.div`
    color: white;
    display: flex;
    flex-direction: row;
    position: fixed;
    justify-content: space-between;
    align-items: center;
    background: rgba(20, 54, 66, 0.69);
    backdrop-filter: blur(2px);
    width: 20rem;
    height: 3rem;
    border-radius: 3rem;
    z-index: 50;
    padding-right: 1rem;
    padding-left: 0.5rem;
    top: 50%;
    left: 50%;
`;

const NumberOfItems = styled.div`
    display: flex;
    background: rgba(20, 54, 66, 0.69);
    backdrop-filter: blur(2px);
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;
`;

const RestaurantDetails = () => {
    const {
        deleteMenu,
        deleteItem,
        deleteCard,
        addMenu,
        addItem,
        deleteAsk,
        restaurantId,
        openedRestaurant,
        setOpenedRestaurant,
        loading,
        error,
    } = useStore();

    const { items, price, menus } = useStore(
        state => ({
            items: state.items,
            price: state.price,
            menus: state.menus,
        }),
        shallow
    );

    const [categories, setCategories] = useState<Array<string>>([]);
    function setRestaurantCategories() {
        const cat = [...categories];
        if (openedRestaurant.menus && !cat.includes('menus')) {
            setCategories([...categories, 'menus']);
            cat.push('menus');
            setCategories(cat);
        }
        openedRestaurant.items.map((item: ItemModel, i: number) => {
            if (item.category && !cat.includes(item.category)) {
                setCategories([...categories, item.category]);
                cat.push(item.category);
            }
            setCategories(cat);
        });
    }
    useEffect(() => {
        console.log(openedRestaurant);
        setRestaurantCategories();
    }, []);
    return (
        <BlurBg
            onClick={e => {
                e.stopPropagation();
                setOpenedRestaurant(null);
            }}>
            {!loading && !error && openedRestaurant && (
                <Details
                    onClick={e => {
                        e.stopPropagation();
                    }}>
                    <SideBar>
                        <RestaurantInfos>
                            <RestaurantImg src={openedRestaurant.pic}></RestaurantImg>
                            <Infos>
                                <RestaurantTitle>
                                    <Text size="1.7rem" weight="700">
                                        {openedRestaurant.name}
                                    </Text>
                                    <CardRating>{openedRestaurant.rating}</CardRating>
                                </RestaurantTitle>
                                <RestaurantAdditionalInfos>
                                    <Info>
                                        <FontAwesomeIcon icon={faBox}></FontAwesomeIcon>
                                        <div>{openedRestaurant.deliveryPrice}€</div>
                                        <div>{openedRestaurant.deliveryTime}</div>
                                    </Info>
                                    <Info>
                                        <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                                        <div>10h00 - 23h30</div>
                                    </Info>
                                </RestaurantAdditionalInfos>
                            </Infos>
                        </RestaurantInfos>
                        <Separator></Separator>
                        <RestaurantMenu>
                            {categories.map((category: string, i: number) => (
                                <Categorie key={i}>{category.replace(/^\w/, c => c.toUpperCase())}</Categorie>
                            ))}
                        </RestaurantMenu>
                    </SideBar>
                    <DetailsContent>
                        {categories.map((category: string, i: number) => (
                            <ItemSection>
                                <SectionTitle>{category.replace(/^\w/, c => c.toUpperCase())}</SectionTitle>
                                <Items>
                                    {category === 'menus' &&
                                        openedRestaurant.menus.map((menu: MenuModel) => (
                                            <ItemCard key={i} menu={menu} onClick={() => {}}></ItemCard>
                                        ))}
                                    {category !== 'menus' &&
                                        openedRestaurant.items
                                            .filter((item: ItemModel) => item.category == category)
                                            .map((item: ItemModel) => (
                                                <ItemCard key={i + 50} item={item} onClick={() => {}}></ItemCard>
                                            ))}
                                </Items>
                            </ItemSection>
                        ))}
                    </DetailsContent>
                    {(menus.length !== 0 || items.length !== 0) && (
                        <BasketModal>
                            <NumberOfItems>{menus.length + items.length}</NumberOfItems>
                            <p>Your command</p>
                            <p>{price} €</p>
                        </BasketModal>
                    )}
                </Details>
            )}
            {deleteAsk && (
                <ConfirmModal
                    confirmLabel={'Oui'}
                    cancelLabel={'Non'}
                    label={'Vous avez deja une commande en cours, voulez vous la supprimé ?'}
                />
            )}
        </BlurBg>
    );
};

export default RestaurantDetails;
