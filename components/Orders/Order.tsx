import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { OrderModel } from '../../models/OrderModel';
import { DeliveryStep, userApi } from '../../public/const';
import { OrderPrice } from '../PendingOrder/styles';
import OrderStatus from './OrderStatus';
import { DeleteOrderButton, OrderContainer } from './styles';
import { Text } from '../../styles/globals';
import moment from 'moment';
import ItemList from './ItemList';
import DeliveryStepper from '../DeliveryStepper/DeliveryStepper';
import { toast } from 'react-toastify';

interface Props {
    order: OrderModel;
    isPendingForRestaurant?: boolean;
}
export interface OrderPriceProps {
    hide?: boolean;
}

export interface DeleteButtonProps {
    isShow: boolean;
}

const Order = ({ order, isPendingForRestaurant = false }: Props) => {
    const { t } = useTranslation('common');
    const [showDelete, setShowDelete] = useState(false);
    async function deleteOrder() {
        try {
            const res = await axios
                .delete(userApi + '/orders/' + order.id, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(() => {
                    toast.success(t('orderDeleted'));
                })
                .catch(error => {
                    toast.error(t('errorAccount'));
                });
        } catch (error) {
            toast.error(t('errorAccount'));
        }
    }
    async function setReadyToPickup() {
        try {
            const res = await axios
                .patch(
                    userApi + '/orders/' + order.id,
                    { status: 'READY_TO_PICKUP' },
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
            toast.error(t('errorAccount'));
        }
    }
    return (
        <OrderContainer
            onMouseEnter={() => (!isPendingForRestaurant ? setShowDelete(true) : '')}
            onMouseLeave={() => setShowDelete(false)}>
            {!isPendingForRestaurant && (
                <Text style={{ maxWidth: '9rem' }} size="1.3rem">
                    {moment(order.startTime).format('MMMM') + ' ' + moment(order.startTime).format('D') + ' order'}
                </Text>
            )}
            <OrderPrice hide={isPendingForRestaurant}>
                <Text size="1.9rem" weight="600">
                    {order.price}€
                </Text>
                <Text
                    style={{ maxWidth: '7rem', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}
                    size="0.8rem">
                    {isPendingForRestaurant
                        ? 'N°' + Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
                        : order.restaurant?.name}
                </Text>
            </OrderPrice>
            {!isPendingForRestaurant && <ItemList itemList={order.items.concat(order.menus)}></ItemList>}
            {isPendingForRestaurant && (
                <DeliveryStepper
                    step={Object.values(DeliveryStep).find(value => value === order.status)!}
                    isInOrder={true}
                    setReadyToPickup={() => {
                        setReadyToPickup();
                    }}></DeliveryStepper>
            )}
            <DeleteOrderButton isShow={showDelete}>
                <OrderStatus hide={isPendingForRestaurant} status={order.status}></OrderStatus>
                <FontAwesomeIcon
                    className="deleteOrderButton"
                    icon={faTrash}
                    fontSize="1.7rem"
                    color="#C0392B"
                    onClick={() => deleteOrder()}></FontAwesomeIcon>
            </DeleteOrderButton>
        </OrderContainer>
    );
};

export default Order;
