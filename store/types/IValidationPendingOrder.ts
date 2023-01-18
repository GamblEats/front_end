import { OrderModel } from '../../models/OrderModel';

interface IValidationPendingOrder {
    validationPendingOrders: Array<OrderModel>;
    error: boolean;
    loading: boolean;
    getValidationPendingOrders: (user: any) => void;
}

export default IValidationPendingOrder;
