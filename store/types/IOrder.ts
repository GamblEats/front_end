import { OrderModel } from '../../models/OrderModel';

interface IOrder {
    orders: Array<OrderModel>;
    error: boolean;
    loading: boolean;
    getOrders: () => void;
}

export default IOrder;
