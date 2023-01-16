import { useTranslation } from 'next-i18next';
import React, { useEffect } from 'react';
import useStore from '../../store/useStore';
import OrdersCount from './OrdersCount';
import { StatsContainer } from './styles';

const Stats = () => {
    const { t } = useTranslation('common');
    const { stats, getStats, loading, error } = useStore();

    useEffect(() => {
        if (!stats) {
            getStats('63b69cdf39f6b932d44f31c6');
        }
    }, []);

    return <StatsContainer>{!loading && !error && <OrdersCount ordersCount={stats.ordersCount} />}</StatsContainer>;
};

export default Stats;
