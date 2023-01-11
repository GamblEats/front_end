import axios from 'axios';
import { StateCreator } from 'zustand';
import IRestaurant from '../types/IRestaurant';
import { restaurantApi } from '../../public/const';
import Router from 'next/router';

const restaurantSlice: StateCreator<IRestaurant> = (set, get) => ({
    loading: true,
    error: false,
    restaurants: [],
    openedRestaurant: null,
    getRestaurants: async () => {
        try {
            const { data } = await axios.get(restaurantApi + '/restaurant-all', {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            set(state => ({ ...state, restaurants: data }));
        } catch (error) {
            throw error;
        }
    },
    setOpenedRestaurant: async (id: string) => {
        if (id) {
            console.log(id);
            try {
                const { data } = await axios.get(`http://127.0.0.1:8000/restaurant/${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                console.log(data);
                set(state => ({ ...state, loading: false, openedRestaurant: data }));
            } catch (error) {
                set(state => ({ ...state, loading: false, error: true }));
                throw error;
            }
        } else {
            Router.query.tab ? Router.replace({ query: { tab: Router.query.tab } }) : Router.replace(Router.pathname);
            set({
                loading: false,
                openedRestaurant: null,
            });
        }
    },
});

export default restaurantSlice;
