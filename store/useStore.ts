import create from 'zustand';
import orderSlice from './slices/orderSlice';
import restaurantSlice from './slices/restaurantSlice';
import validationPendingOrdersSlice from './slices/validationPendingOrderSlice';
import IOrder from './types/IOrder';
import IRestaurant from './types/IRestaurant';
import IValidationPendingOrder from './types/IValidationPendingOrder';

const useStore = create<IRestaurant & IOrder & IValidationPendingOrder>()((...a) => ({
    ...restaurantSlice(...a),
    ...orderSlice(...a),
    ...validationPendingOrdersSlice(...a)
}));
export default useStore;
