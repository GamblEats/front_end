import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { PageContainer } from '../styles/globals';
import PageHeader from '../components/globals/PageHeader';
import { useTranslation } from 'next-i18next';
import styled from 'styled-components';
import DeliveryStepper from '../components/DeliveryStepper/DeliveryStepper';
import { delivererApi, DeliveryStep, userApi } from '../public/const';
import Button from '../components/globals/Button';
import useStore from '../store/useStore';
import PendingOrder from '../components/PendingOrder/PendingOrder';
import { OrderModel } from '../models/OrderModel';
import axios from 'axios';
import Loader from '../components/globals/Loader';

const DeliveriesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const DeliveryContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 14rem;
    width: 100%;
    background-color: white;
    border-radius: 1.4rem;
    padding: 2rem;
`;

const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: baseline;
`;

const PendingDeliveriesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

const OrderButton = styled.div`
    display: flex;
    font-weight: 600;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;
    &:hover  {
        opacity: 0.7;
    }
`;

const NoDelivery = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: #143642;
    font-size: 1.4rem;
`;

const Deliveries = () => {
    const { t } = useTranslation('common');
    const { data: session }: any = useSession();
    const router = useRouter();
    const [delivery, setDelivery] = useState<any>();
    const [isLoading, setIsLoading] = useState(true);
    const { readyToPickupOrders, getReadyToPickupOrders } = useStore();
    async function getDelivery() {
        try {
            await axios
                .get(`${delivererApi}/orders/${session.user.id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(resp => {
                    setDelivery(resp.data);
                    setIsLoading(false);
                });
        } catch (error) {}
    }
    async function updateDelivery(status: string) {
        await axios
            .patch(
                userApi + '/orders/' + delivery.id,
                { status: status },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
            .then(resp => {
                setDelivery(resp.data);
                setIsLoading(false);
                getDelivery();
            });
    }
    useEffect(() => {
        getDelivery();
        if (session.user.role !== 'deliverer') {
            router.push('/home');
        }
        if (readyToPickupOrders.length === 0) {
            getReadyToPickupOrders(session.user);
        }
    }, []);
    return (
        <PageContainer>
            <PageHeader title={t('deliveries')}></PageHeader>
            <DeliveriesContainer>
                {isLoading && (
                    <DeliveryContainer>
                        <Loader size="3rem" />
                    </DeliveryContainer>
                )}
                {!isLoading && delivery === null && (
                    <DeliveryContainer>
                        <NoDelivery>{t('noDelivery')}</NoDelivery>
                    </DeliveryContainer>
                )}
                {!isLoading && delivery !== null && (
                    <DeliveryContainer>
                        <DeliveryStepper
                            step={
                                Object.values(DeliveryStep).find(value => value === delivery?.status)!
                            }></DeliveryStepper>
                        <ButtonContainer>
                            <OrderButton
                                style={{ justifyContent: 'left', color: '#C0392B' }}
                                onClick={() => {
                                    updateDelivery('CANCELED');
                                }}>
                                {t('cancelOrder')}
                            </OrderButton>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                {delivery?.status == 'IN_PREPARATION' && (
                                    <Button
                                        text={t('pickedUp')}
                                        backgroundColor="#27AE60"
                                        onClick={() => updateDelivery('ON_THE_WAY')}></Button>
                                )}
                                {delivery?.status == 'ON_THE_WAY' && (
                                    <Button
                                        text={t('atTheDoor')}
                                        backgroundColor="#27AE60"
                                        onClick={() => updateDelivery('AT_YOUR_DOOR')}></Button>
                                )}
                                {delivery?.status == 'AT_YOUR_DOOR' && (
                                    <Button
                                        text={t('orderDelivered')}
                                        backgroundColor="#27AE60"
                                        onClick={() => updateDelivery('DELIVERED')}></Button>
                                )}
                            </div>
                            <OrderButton style={{ justifyContent: 'right', color: '#E67E22' }}>
                                {t('orderProblem')}
                            </OrderButton>
                        </ButtonContainer>
                    </DeliveryContainer>
                )}
                <PendingDeliveriesContainer>
                    {readyToPickupOrders.map((order: OrderModel) => (
                        <PendingOrder
                            key={order.id}
                            order={order}
                            isRestaurant={false}
                            onValidation={() => {}}
                            onReject={() => {}}></PendingOrder>
                    ))}
                </PendingDeliveriesContainer>
            </DeliveriesContainer>
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
export default Deliveries;
Deliveries.requireAuth = true;
