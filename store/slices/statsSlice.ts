import axios from 'axios';
import { StateCreator } from 'zustand';
import { userApi } from '../../public/const';
import IStats from '../types/IStats';

const statsSlice: StateCreator<IStats> = (set, get) => ({
    stats: null,
    loading: true,
    error: false,
    getStats: async (restaurant) => {
        try {
            const { data } = await axios.get(userApi + `/restaurants/${restaurant}/stats`, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            set(state => ({ ...state, stats: data, loading: false }));
        } catch (error) {
            throw error;
        }
    },
});

export default statsSlice;
