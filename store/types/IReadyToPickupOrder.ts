import { OrderModel } from '../../models/OrderModel';

interface IReadyToPickupOrder {
    readyToPickupOrders: Array<OrderModel>;
    error: boolean;
    loading: boolean;
    getReadyToPickupOrders: (user: any) => void;
}

export default IReadyToPickupOrder;
