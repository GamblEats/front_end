import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Index from './index';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';
import useStore from '../store/useStore';
import PageHeader from '../components/globals/PageHeader';
import SearchInput from '../components/globals/SearchInput';
import CurrentOrder from '../components/Orders/CurrentOrder';
import Order from '../components/Orders/Order';
import { months } from '../public/const';
import { PageContainer } from '../styles/globals';

const OrdersContainers = styled.div`
    display: flex;
    gap: 3rem;
    height: 35rem;
    @media (max-width: 1200px) {
        flex-direction: column;
        gap: 1.5rem;
    }
`;

const PastOrdersContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    gap: 1.5rem;
    @media (max-width: 1200px) {
        width: 100%;
        order: 2;
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
        order: 1;
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

const Orders = () => {
    const { data: session }: any = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session.user.role !== 'restaurant' && session.user.role !== 'client') {
            router.push('/home');
        }
    }, []);
    const { t } = useTranslation('common');
    const { orders, getOrders } = useStore();
    useEffect(() => {
        if (orders.length === 0) {
            getOrders(session.user);
        }
    }, []);

    return (
        <PageContainer>
            <PageHeader title={t('orders')}></PageHeader>
            <OrdersContainers>
                <PastOrdersContainer>
                    <FilterContainer>
                        <SearchInput placeHolder={t('searchByRestaurant')} onChange={() => {}}></SearchInput>
                        <MonthSelector required defaultValue="" name="orders">
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
                            .filter(order => order.status == ('DELIVRED' || 'CANCELED'))
                            .map((order, i) => (
                                <Order key={i} order={order}></Order>
                            ))}
                    </OrderContainer>
                </PastOrdersContainer>
                <CurrentOrderContainer>
                    <CurrentOrder
                        currentOrder={
                            orders.filter(order => order.status != ('DELIVRED' || 'CANCELED'))[0]
                        }></CurrentOrder>
                </CurrentOrderContainer>
            </OrdersContainers>
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
