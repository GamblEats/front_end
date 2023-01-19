import axios from 'axios';
import { StateCreator } from 'zustand';
import { delivererApi } from '../../public/const';
import IReadyToPickupOrder from '../types/IReadyToPickupOrder';

const readyToPickupOrderSlice: StateCreator<IReadyToPickupOrder> = (set, get) => ({
    loading: true,
    error: false,
    readyToPickupOrders: [],
    getReadyToPickupOrders: async user => {
        try {
            const { data } = await axios.get(`${delivererApi}/deliverer/${user.city}`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            set(state => ({ ...state, readyToPickupOrders: data }));
        } catch (error) {
            throw error;
        }
    },
});

export default readyToPickupOrderSlice;
