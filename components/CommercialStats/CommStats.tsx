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
    const { commStats, getCommStats, commLoading, commError } = useStore();
    const { data: session }: any = useSession();
    useEffect(() => {
        if (!commStats) {
            getCommStats();
        }
    }, []);
    return (
        <StatsContainer>
            {commStats && (
                <React.Fragment>
                    <OrdersCount ordersCount={commStats.ordersCount} />
                    <StatsWrapper>
                        <TopItems itemCount={commStats.itemCount} />
                        <Average
                            nbUser={commStats.nbUser}
                            nbRestaurant={commStats.nbRestaurant}
                            nbRestaurateur={commStats.nbRestaurateurs}
                            nbDeliverer={commStats.nbDeliverer}
                        />
                    </StatsWrapper>
                </React.Fragment>
            )}
        </StatsContainer>
    );
};

export default CommStats;
