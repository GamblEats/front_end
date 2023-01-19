import { useSession } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import React, { useEffect } from 'react';
import useStore from '../../store/useStore';
import Loader from '../globals/Loader';
import Average from './Average';
import OrdersCount from './OrdersCount';
import { StatsContainer, StatsWrapper } from './styles';
import TopItems from './TopItems';

const CommStats = () => {
    const { t } = useTranslation('common');
    const { stats, getStats, loading, error } = useStore();
    const { data: session }: any = useSession();
    useEffect(() => {
        if (!stats) {
            getStats(session.user.id);
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

export default CommStats;
