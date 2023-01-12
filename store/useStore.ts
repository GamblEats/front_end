import create from 'zustand';
import orderSlice from './slices/orderSlice';
import restaurantSlice from './slices/restaurantSlice';
import IOrder from './types/IOrder';
import IRestaurant from './types/IRestaurant';

const useStore = create<IRestaurant & IOrder>()((...a) => ({
    ...restaurantSlice(...a),
    ...orderSlice(...a)
}));
export default useStore;
