import { useTranslation } from 'next-i18next';
import React, { useEffect } from 'react';
import useStore from '../../store/useStore';
import Average from './Average';
import OrdersCount from './OrdersCount';
import { StatsContainer, StatsWrapper } from './styles';
import TopItems from './TopItems';

const Stats = () => {
    const { t } = useTranslation('common');
    const { stats, getStats, loading, error } = useStore();

    useEffect(() => {
        if (!stats) {
            getStats('63b69cdf39f6b932d44f31c6');
        }
    }, []);

    return (
        <StatsContainer>
            {!loading && !error && (
                <React.Fragment>
                    <OrdersCount ordersCount={stats.ordersCount} />
                    <StatsWrapper>
                        <TopItems itemCount={stats.itemCount} />
                        <Average average={stats.average} averageTime={stats.averageTime} />
                    </StatsWrapper>
                </React.Fragment>
            )}
        </StatsContainer>
    );
};

export default Stats;
