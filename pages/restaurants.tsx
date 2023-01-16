import Catalog from '../components/RestaurantsCatalog/Catalog';
import { PageContainer } from '../styles/globals';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import PageHeader from '../components/globals/PageHeader';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useStore from '../store/useStore';

const Restaurants = () => {
    const { t } = useTranslation('common');
    const { data: session }: any = useSession();
    const router = useRouter();
    const { restaurants, getRestaurants } = useStore();
    useEffect(() => {
        if (session.user.role !== 'client') {
            router.push('/home');
        }
        if (restaurants.length === 0) {
            getRestaurants();
        }
    }, []);

    return (
        <PageContainer>
            <PageHeader title={t('restaurants')}></PageHeader>
            <Catalog restaurants={restaurants} />
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

export default Restaurants;
Restaurants.requireAuth = true;
