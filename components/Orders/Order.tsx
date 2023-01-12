import { useTranslation } from 'next-i18next';
import { OrderModel } from '../../models/OrderModel';
import { DeliveryStep } from '../../public/const';
import OrderStatus from './OrderStatus';
import { OrderContainer, OrderDate } from './styles';

interface Props {
    order: OrderModel;
}

const Order = ({ order }: Props) => {
    const { t } = useTranslation('common');
    return (
        <OrderContainer>
            <OrderDate>{order.startTime}</OrderDate>
            <OrderStatus status={DeliveryStep.DELIVRED}></OrderStatus>
        </OrderContainer>
    );
};

export default Order;
