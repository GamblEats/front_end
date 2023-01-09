import Catalog from '../components/RestaurantsCatalog/Catalog';
import { PageContainer, PageTitle } from '../styles/globals';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Index from './index';
const Restaurants = () => {
    const { t } = useTranslation('common');
    return (
        <PageContainer>
            <PageTitle>{t('restaurants')}</PageTitle>
            <Catalog />
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
