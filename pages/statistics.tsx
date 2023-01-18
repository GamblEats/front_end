import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { PageContainer } from '../styles/globals';
import PageHeader from '../components/globals/PageHeader';
import { useTranslation } from 'next-i18next';
import Stats from '../components/Stats/Stats';

const Statistics = () => {
    const { t } = useTranslation('common');
    const { data: session }: any = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session.user.role !== 'restaurant') {
            router.push('/home');
        }
    }, []);
    return (
        <PageContainer>
            <PageHeader title={t('statistics')}></PageHeader>
            <Stats />
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
export default Statistics;
Statistics.requireAuth = true;
