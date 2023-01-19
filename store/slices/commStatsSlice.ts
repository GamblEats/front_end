import axios from 'axios';
import { StateCreator } from 'zustand';
import { userApi } from '../../public/const';
import ICommStats from '../types/ICommStats';

const commStatsSlice: StateCreator<ICommStats> = (set, get) => ({
    stats: null,
    loading: true,
    error: false,
    getCommStats: async () => {
        try {
            const { data } = await axios.get(userApi + `/stats`, {
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

export default commStatsSlice;
