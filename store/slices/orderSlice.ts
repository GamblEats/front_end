import axios from 'axios';
import { StateCreator } from 'zustand';
import { userApi } from '../../public/const';
import IOrder from '../types/IOrder';

const orderSlice: StateCreator<IOrder> = (set, get) => ({
    loading: true,
    error: false,
    orders: [],
    getOrders: async user => {
        try {
            const { data } = await axios.get(userApi + (user.role == 'client' ? `/users/${user.id}/orders` : `/admins/restaurants/${user.restaurantId}`), {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            set(state => ({ ...state, orders: data }));
        } catch (error) {
            throw error;
        }
    },
});

export default orderSlice;
