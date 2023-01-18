import axios from 'axios';
import { StateCreator } from 'zustand';
import { userApi } from '../../public/const';
import IValidationPendingOrder from '../types/IValidationPendingOrder';

const validationPendingOrdersSlice: StateCreator<IValidationPendingOrder> = (set, get) => ({
    loading: true,
    error: false,
    validationPendingOrders: [],
    getValidationPendingOrders: async user => {
        try {
            const { data } = await axios.get(userApi + `/admins/restaurants/${user.restaurantId}/pending`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            set(state => ({ ...state, validationPendingOrders: data }));
        } catch (error) {
            throw error;
        }
    },
});

export default validationPendingOrdersSlice;
