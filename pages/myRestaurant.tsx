import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { use } from 'i18next';
import { useRouter } from 'next/router';
import { PageContainer } from '../styles/globals';
import PageHeader from '../components/globals/PageHeader';
import { useTranslation } from 'next-i18next';
import MenusAndArticles from '../components/RestaurantAccount/MenusAndArticles';
import AccountInfo from '../components/RestaurantAccount/AccountInfo';
import { AccountWrapper } from '../components/RestaurantAccount/styles';

const MyRestaurant = () => {
    const { data: session }: any = useSession();
    const router = useRouter();

    const { t } = useTranslation('common');

    useEffect(() => {
        if (session.user.role !== 'restaurant') {
            router.push('/home');
        }
    }, []);

    return (
        <PageContainer>
            <PageHeader title={t('myRestaurant')}></PageHeader>
            <AccountWrapper>
                <MenusAndArticles />
                <AccountInfo />
            </AccountWrapper>
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
