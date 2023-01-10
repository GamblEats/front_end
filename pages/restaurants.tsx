import Catalog from '../components/RestaurantsCatalog/Catalog';
import { PageContainer } from '../styles/globals';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import PageHeader from '../components/globals/PageHeader';

const Restaurants = () => {
    const { t } = useTranslation('common');
    return (
        <PageContainer>
            <PageHeader title={t('restaurants')}></PageHeader>
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
