import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { OrderModel } from '../../models/OrderModel';
import { userApi } from '../../public/const';
import { OrderPrice } from '../PendingOrder/styles';
import OrderStatus from './OrderStatus';
import { DeleteOrderButton, OrderContainer, OrderContent } from './styles';
import { Text } from '../../styles/globals';
import moment from 'moment';
import ItemList from './ItemList';

interface Props {
    order: OrderModel;
}

export interface DeleteButtonProps {
    isShow: boolean;
}

const Order = ({ order }: Props) => {
    const { t } = useTranslation('common');
    const [showDelete, setShowDelete] = useState(false);
    async function deleteOrder() {
        try {
            const { data } = await axios.delete(userApi + '/orders/' + order.id, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } catch (error) {
            throw error;
        }
    }
    return (
        <OrderContainer onMouseEnter={() => setShowDelete(true)} onMouseLeave={() => setShowDelete(false)}>
            <Text style={{ maxWidth: '9rem' }} size="1.3rem">
                {moment(order.startTime).format('MMMM') + ' ' + moment(order.startTime).format('D') + ' order'}
            </Text>
            <OrderPrice>
                <Text size="1.9rem" weight="600">
                    {order.price}€
                </Text>
                <Text
                    style={{ maxWidth: '7rem', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}
                    size="0.8rem">
                    {order.restaurant.name}
                </Text>
            </OrderPrice>
            <ItemList itemList={order.menus.concat(order.items)}></ItemList>
            <DeleteOrderButton isShow={showDelete}>
                <OrderStatus status={order.status}></OrderStatus>
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
