import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { PageContainer } from '../styles/globals';
import PageHeader from '../components/globals/PageHeader';
import { useTranslation } from 'next-i18next';
import Stats from '../components/Stats/Stats';
import useStore from '../store/useStore';
import Loader from '../components/globals/Loader';

const Statistics = () => {
    const { t } = useTranslation('common');
    const { data: session }: any = useSession();
    const { stats, getStats, loading, error } = useStore();
    const router = useRouter();

    useEffect(() => {
        if (session.user.role !== 'restaurant') {
            router.push('/home');
        }
    }, []);
    return (
        <PageContainer>
            <PageHeader title={t('statistics')}></PageHeader>
            {!stats && <Loader onAllPage={true} size="5rem" />}
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
