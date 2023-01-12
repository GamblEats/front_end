import axios from 'axios';
import { StateCreator } from 'zustand';
import { userApi } from '../../public/const';
import IOrder from '../types/IOrder';

const orderSlice: StateCreator<IOrder> = (set, get) => ({
    loading: true,
    error: false,
    orders: [],
    getOrders: async () => {
        try {
            const { data } = await axios.get(userApi + '/orders/63b6a4919cb90db289516df3', {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            set(state => ({ ...state, orders: data }));
            console.log(data);
        } catch (error) {
            throw error;
        }
    },
});

export default orderSlice;
