import create from 'zustand';
import orderSlice from './slices/orderSlice';
import restaurantSlice from './slices/restaurantSlice';
import IOrder from './types/IOrder';
import IRestaurant from './types/IRestaurant';
import basketSlice from './slices/basketSlice';
import IBasket from './types/IBasket';

const useStore = create<IRestaurant & IOrder & IBasket>((...a) => ({
    ...restaurantSlice(...a),
    ...orderSlice(...a),
    ...basketSlice(...a),
}));
export default useStore;
