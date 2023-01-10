import axios from 'axios';
import { StateCreator } from 'zustand';
import IRestaurant from '../types/IRestaurant';

const restaurantSlice: StateCreator<IRestaurant> = (set, get) => ({
    loading: true,
    error: false,
    restaurants: [],
    getRestaurants: async () => {
        try {
            const { data } = await axios.get('http://127.0.0.1:8000/restaurant-all', {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            set(state => ({ ...state, restaurants: data }));
        } catch (error) {
            throw error;
        }
    },
});

export default restaurantSlice;