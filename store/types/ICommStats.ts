import { StatsModel } from '../../models/StatsModel';

interface IStats {
    stats: any;
    error: boolean;
    loading: boolean;
    getCommStats: () => void;
}

export default IStats;
