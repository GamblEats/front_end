import create from 'zustand';
import orderSlice from './slices/orderSlice';
import restaurantSlice from './slices/restaurantSlice';
import validationPendingOrdersSlice from './slices/validationPendingOrderSlice';
import IOrder from './types/IOrder';
import IRestaurant from './types/IRestaurant';
import IValidationPendingOrder from './types/IValidationPendingOrder';
import statsSlice from './slices/statsSlice';
import IOrder from './types/IOrder';
import IRestaurant from './types/IRestaurant';
import IStats from './types/IStats';
import basketSlice from './slices/basketSlice';
import IBasket from './types/IBasket';

const useStore = create<IRestaurant & IOrder & IValidationPendingOrder & IBasket & IStats>()((...a) => ({
    ...restaurantSlice(...a),
    ...orderSlice(...a),
    ...basketSlice(...a),
    ...statsSlice(...a),
    ...validationPendingOrdersSlice(...a)
}));
export default useStore;
