import create from 'zustand';
import orderSlice from './slices/orderSlice';
import restaurantSlice from './slices/restaurantSlice';
import statsSlice from './slices/statsSlice';
import IOrder from './types/IOrder';
import IRestaurant from './types/IRestaurant';
import IStats from './types/IStats';

const useStore = create<IRestaurant & IOrder & IStats>()((...a) => ({
    ...restaurantSlice(...a),
    ...orderSlice(...a),
    ...statsSlice(...a)
}));
export default useStore;
