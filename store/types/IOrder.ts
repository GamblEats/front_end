import { OrderModel } from '../../models/OrderModel';

interface IOrder {
    orders: Array<OrderModel>;
    error: boolean;
    loading: boolean;
    getOrders: (user: any) => void;
}

export default IOrder;
