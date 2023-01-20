import { useEffect, useState } from 'react';
import { faBox, faClock, faTimes, faTrash, faCreditCard, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useStore from '../../store/useStore';
import { shallow } from 'zustand/shallow';
import ConfirmModal from './ConfirmModal';
import { ItemModel } from '../../models/ItemModel';
import { Text } from '../../styles/globals';
import { CardRating } from '../RestaurantCard/styles';
import {
    BasketModal,
    BlurBg,
    Bottom,
    Button,
    Buttons,
    Categorie,
    CloseModal,
    Details,
    DetailsContent,
    DivClose,
    Info,
    Infos,
    Items,
    ItemSection,
    NumberOfItems,
    Order,
    OrderTitle,
    RestaurantAdditionalInfos,
    RestaurantImg,
    RestaurantInfos,
    RestaurantMenu,
    RestaurantTitle,
    SectionTitle,
    Separator,
    SideBar,
    Total,
} from './styles';
import ItemCard from '../ItemCard/ItemCard';
import { MenuModel } from '../../models/MenuModel';
import { useTranslation } from 'next-i18next';
import ItemList from '../Orders/ItemList';

import axios from 'axios';
import { userApi } from '../../public/const';
import { useSession } from 'next-auth/react';
import { router } from 'next/client';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

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

    const [orderIsOpen, setOrderIsOpen] = useState<boolean>(false);

    const { items, price, menus } = useStore(
        state => ({
            items: state.items,
            price: state.price,
            menus: state.menus,
        }),
        shallow
    );
    const { data: session }: any = useSession();
    const { t } = useTranslation('common');
    const router = useRouter();

    const [categories, setCategories] = useState<Array<string>>([]);
    function setRestaurantCategories() {
        const cat = [...categories];
        if (openedRestaurant && openedRestaurant.menus && !cat.includes('menus')) {
            setCategories([...categories, 'menus']);
            cat.push('menus');
            setCategories(cat);
        }
        openedRestaurant &&
            openedRestaurant.items.map((item: ItemModel, i: number) => {
                if (item.category && !cat.includes(item.category)) {
                    setCategories([...categories, item.category]);
                    cat.push(item.category);
                }
                setCategories(cat);
            });
    }
    useEffect(() => {
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
                    <DivClose
                        onClick={() => {
                            setOpenedRestaurant(null);
                        }}>
                        <CloseModal icon={faTimes} />
                    </DivClose>
                    <DetailsContent>
                        {categories.map((category: string, i: number) => (
                            <ItemSection>
                                <SectionTitle>{category.replace(/^\w/, c => c.toUpperCase())}</SectionTitle>
                                <Items>
                                    {category === 'menus' &&
                                        openedRestaurant.menus.map((menu: MenuModel) => (
                                            <ItemCard
                                                key={menu.id}
                                                menu={menu}
                                                onClick={() => {
                                                    addMenu(menu);
                                                }}></ItemCard>
                                        ))}
                                    {category !== 'menus' &&
                                        openedRestaurant.items
                                            .filter((item: ItemModel) => item.category == category)
                                            .map((item: ItemModel) => (
                                                <ItemCard
                                                    key={item.id}
                                                    item={item}
                                                    onClick={() => {
                                                        addItem(item, openedRestaurant.name);
                                                    }}></ItemCard>
                                            ))}
                                </Items>
                            </ItemSection>
                        ))}
                    </DetailsContent>
                    {(menus.length !== 0 || items.length !== 0) && (
                        <BasketModal
                            onClick={() => {
                                setOrderIsOpen(true);
                            }}>
                            <NumberOfItems>{menus.length + items.length}</NumberOfItems>
                            <p>{t('yourCommand')}</p>
                            <p>{price} €</p>
                        </BasketModal>
                    )}

                    <Order
                        style={{
                            width: orderIsOpen ? '25%' : '0',
                            padding: orderIsOpen ? '3rem 1rem 1rem 1rem' : '3rem 0rem 1rem 0rem',
                        }}>
                        <OrderTitle>{t('yourCommand')}</OrderTitle>
                        <FontAwesomeIcon
                            color={'#E5BF00'}
                            icon={faArrowRight}
                            fontSize={'1.2rem'}
                            cursor={'pointer'}
                            style={{
                                position: 'absolute',
                                left: '0.5rem',
                                top: '0.5rem',
                                backdropFilter: 'blur(10px)',
                            }}
                            onClick={() => {
                                setOrderIsOpen(false);
                            }}
                        />
                        {menus.length > 0 || items.length > 0 ? (
                            <ItemList itemList={[...menus, ...items]} isBasket={true}></ItemList>
                        ) : (
                            <div> Le panier est vide </div>
                        )}
                        <Bottom>
                            <Total>Total : {price}€</Total>
                            <Buttons>
                                <Button
                                    style={{ backgroundColor: '#27AE60' }}
                                    onClick={() => {
                                        if (session) {
                                            const menusID = menus.map(menu => menu.id);
                                            const itemsID = items.map(item => item.id);
                                            const values = {
                                                client: session.user.id,
                                                restaurant: openedRestaurant.id,
                                                items: itemsID,
                                                menus: menusID,
                                                price: price,
                                            };
                                            axios
                                                .post(userApi + '/orders', values, {
                                                    headers: {
                                                        'Content-Type': 'application/json',
                                                    },
                                                })
                                                .then(resp => {
                                                    toast.success('Commande créée');
                                                    setOpenedRestaurant(null);
                                                    deleteCard();
                                                });
                                        }
                                    }}>
                                    <FontAwesomeIcon icon={faCreditCard} color={'white'} fontSize={'1.5rem'} />
                                </Button>
                                <Button
                                    style={{ backgroundColor: '#c0392b' }}
                                    onClick={() => {
                                        deleteCard();
                                    }}>
                                    <FontAwesomeIcon icon={faTrash} color={'white'} fontSize={'1.5rem'} />
                                </Button>
                            </Buttons>
                        </Bottom>
                    </Order>
                </Details>
            )}
            {deleteAsk && (
                <ConfirmModal confirmLabel={t('yes')} cancelLabel={t('no')} label={t('cancelOrderQuestion')} />
            )}
        </BlurBg>
    );
};

export default RestaurantDetails;
