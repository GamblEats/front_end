import { CommStatsModel } from '../../models/CommStatsModel';

interface ICommStats {
    commStats: any;
    commError: boolean;
    commLoading: boolean;
    getCommStats: () => void;
}

export default ICommStats;
