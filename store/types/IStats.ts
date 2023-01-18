import { StatsModel } from '../../models/StatsModel';

interface IStats {
    stats: any;
    error: boolean;
    loading: boolean;
    getStats: (restaurant: any) => void;
}

export default IStats;
