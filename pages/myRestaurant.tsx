import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React, { useEffect, useRef, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { PageContainer } from '../styles/globals';
import PageHeader from '../components/globals/PageHeader';
import { useTranslation } from 'next-i18next';
import MenusAndArticles from '../components/RestaurantAccount/MenusAndArticles';
import AccountInfo from '../components/RestaurantAccount/AccountInfo';
import { AccountWrapper } from '../components/RestaurantAccount/styles';
import axios from 'axios';
import { restaurantApi } from '../public/const';
import CreationForm from '../components/RestaurantCreation/CreationForm';
import Loader from '../components/globals/Loader';

const MyRestaurant = () => {
    const { data: session }: any = useSession();
    const router = useRouter();
    const [restaurantInfo, setRestaurantInfo] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const { t } = useTranslation('common');

    const isInitialMount = useRef(true);
    useEffect(() => {
        if (session.user.role !== 'restaurant') {
            router.push('/home');
        }
    }, []);

    async function getRestaurant() {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            await axios.get(`${restaurantApi}/restaurants/${session.user.restaurantId}`).then(resp => {
                setRestaurantInfo(resp.data);
                setLoading(false);
            });
        }
    }
    useEffect(() => {
        if (session.user.restaurantId) {
            getRestaurant();
        }
    }, []);
    return (
        <PageContainer>
            <PageHeader title={t('myRestaurant')}></PageHeader>
            {!session.user.restaurantId || (!restaurantInfo && <Loader onAllPage={true} size="5rem" />)}
            {session.user.restaurantId ? (
                <AccountWrapper>
                    <MenusAndArticles restaurantInfo={restaurantInfo} getRestaurant={getRestaurant} loading={loading} />
                    <AccountInfo restaurantInfo={restaurantInfo} loading={loading} />
                </AccountWrapper>
            ) : (
                <React.Fragment>
                    <CreationForm sessionUser={session.user} />
                </React.Fragment>
            )}
        </PageContainer>
    );
};
export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['common'])),
        },
    };
};
export default MyRestaurant;
MyRestaurant.requireAuth = true;
