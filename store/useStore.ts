import create from 'zustand';
import { devtools } from 'zustand/middleware';
import restaurantSlice from './slices/restaurantSlice';
import IRestaurant from './types/IRestaurant';

const useStore = create<IRestaurant>()((...a) => ({
    ...restaurantSlice(...a),
}));
export default useStore;
