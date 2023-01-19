import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useStore from '../store/useStore';
import PageHeader from '../components/globals/PageHeader';
import SearchInput from '../components/globals/SearchInput';
import CurrentOrder from '../components/Orders/CurrentOrder';
import Order from '../components/Orders/Order';
import { months, userApi } from '../public/const';
import { PageContainer } from '../styles/globals';
import moment from 'moment';
import { OrderModel } from '../models/OrderModel';
import PendingOrder from '../components/PendingOrder/PendingOrder';
import { Text } from '../styles/globals';
import axios from 'axios';
import { toast } from 'react-toastify';

const OrdersContainers = styled.div`
    display: flex;
    gap: 3rem;
    height: 70%;
    @media (max-width: 1200px) {
        flex-direction: column-reverse;
        gap: 1.5rem;
        height: auto;
    }
`;

const PastOrdersContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    gap: 1.5rem;
    @media (max-width: 1200px) {
        width: 100%;
    }
`;

const CurrentOrderContainer = styled.div`
    background-color: white;
    justify-content: center;
    align-items: center;
    border-radius: 1.2rem;
    width: 30%;
    @media (max-width: 1200px) {
        width: 100%;
    }
`;

const FilterContainer = styled.div`
    display: flex;
    gap: 1rem;
    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

const MonthSelector = styled.select`
    border: none;
    border-radius: 10rem;
    width: 40%;
    padding: 1rem 1.5rem;
    font-size: 1rem;
    color: #143642;
    @media (max-width: 600px) {
        width: 100%;
    }
`;

const OrderContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
`;

const RestaurantOrdersContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 60%;
    gap: 2rem;
    overflow-y: auto;
    @media (max-width: 1200px) {
        width: 100%;
        /* height: 100rem; */
        /* overflow-y: visible; */
    }
`;

const PendingOrdersContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    gap: 2rem;
    overflow-y: auto;
    @media (max-width: 1200px) {
        flex-direction: row;
        overflow: hidden;
        overflow-x: auto;
        width: 100%;
    }
`;

const MobileText = styled.div`
    display: none;
    @media (max-width: 1200px) {
        display: block;
    }
`;

const Orders = () => {
    const { data: session }: any = useSession();
    const router = useRouter();
    const [searchByRestaurant, setSearchByRestaurant] = useState('');
    const [searchByMonth, setSearchByMonth] = useState('');
    const { t } = useTranslation('common');
    const { orders, getOrders } = useStore();
    async function validOrder(orderId: string) {
        try {
            const res = await axios
                .patch(
                    userApi + '/orders/' + orderId,
                    { status: 'IN_PREPARATION' },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                )
                .then(() => {
                    toast.success(t('orderAccepted'));
                })
                .catch(error => {
                    toast.error(t('errorAccount'));
                });
        } catch (error) {
            throw error;
        }
    }
    useEffect(() => {
        if (session.user.role !== 'restaurant' && session.user.role !== 'client') {
            router.push('/home');
        }
    }, []);
    useEffect(() => {
        if (orders.length === 0) {
            getOrders(session.user);
        }
    }, []);
    return (
        <PageContainer>
            <PageHeader title={t('orders')}></PageHeader>
            {session.user.role == 'client' ? (
                <OrdersContainers>
                    <PastOrdersContainer>
                        <FilterContainer>
                            <SearchInput
                                placeHolder={t('searchByRestaurant')}
                                onChange={ev => setSearchByRestaurant(ev.target.value)}></SearchInput>
                            <MonthSelector
                                required
                                defaultValue=""
                                name="orders"
                                onChange={ev => setSearchByMonth(ev.target.value)}>
                                <option value="" disabled hidden>
                                    {t('searchByMonth')}
                                </option>
                                {months.map((month, i) => (
                                    <option key={i} value={month}>
                                        {t(month)}
                                    </option>
                                ))}
                            </MonthSelector>
                        </FilterContainer>
                        <OrderContainer>
                            {orders
                                .filter(
                                    order =>
                                        (order.status === 'DELIVERED' || order.status === 'CANCELED') &&
                                        order.restaurant.name.toLowerCase().indexOf(searchByRestaurant.toLowerCase()) >
                                            -1 &&
                                        moment(order.startTime)
                                            .format('MMMM')
                                            .toLowerCase()
                                            .indexOf(searchByMonth.toLowerCase()) > -1
                                )
                                .map((order, i) => (
                                    <Order key={order.id} order={order}></Order>
                                ))}
                        </OrderContainer>
                    </PastOrdersContainer>
                    <CurrentOrderContainer>
                        <CurrentOrder
                            currentOrder={
                                orders.filter(order => order.status != ('DELIVERED' || 'CANCELED'))[0]
                            }></CurrentOrder>
                    </CurrentOrderContainer>
                </OrdersContainers>
            ) : (
                <OrdersContainers>
                    <RestaurantOrdersContainer>
                        {orders
                            .filter(
                                order =>
                                    order.status !== 'DELIVERED' &&
                                    order.status !== 'CANCELED' &&
                                    order.status !== 'VALIDATION_PENDING'
                            )
                            .map((order: OrderModel) => (
                                <Order key={order.id} order={order} isPendingForRestaurant={true}></Order>
                            ))}
                        <Text size="1.8rem" weight="600">
                            {t('pastOrders')}
                        </Text>
                        {orders
                            .filter(order => order.status === 'DELIVERED' || order.status === 'CANCELED')
                            .map((order: OrderModel) => (
                                <Order key={order.id} order={order}></Order>
                            ))}
                    </RestaurantOrdersContainer>
                    <MobileText>
                        <Text size="1.8rem" weight="600">
                            {t('orderInProgress')}
                        </Text>
                    </MobileText>
                    <PendingOrdersContainer>
                        {orders
                            .filter(order => order.status === 'VALIDATION_PENDING')
                            .map((order: OrderModel, i: number) => (
                                <PendingOrder
                                    key={order.id}
                                    isRestaurant={true}
                                    order={order}
                                    onValidation={() => validOrder(order.id!)}
                                    onReject={() => {}}></PendingOrder>
                            ))}
                    </PendingOrdersContainer>
                </OrdersContainers>
            )}
        </PageContainer>
    );
};
export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['common'])),
        },
    };
};
export default Orders;
Orders.requireAuth = true;
