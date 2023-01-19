import { CommStatsModel } from '../../models/CommStatsModel';

interface ICommStats {
    commStats: any;
    error: boolean;
    loading: boolean;
    getCommStats: () => void;
}

export default ICommStats;
