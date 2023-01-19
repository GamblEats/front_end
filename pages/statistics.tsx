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
import CommStats from '../components/CommercialStats/CommStats';

const Statistics = () => {
    const { t } = useTranslation('common');
    const { data: session }: any = useSession();
    const { stats, getStats, getCommStats, commStats, loading, error } = useStore();
    const router = useRouter();

    useEffect(() => {
        if (session.user.role !== 'restaurant' && session.user.role !== 'commercial') {
            router.push('/home');
        }
    }, []);
    return (
        <PageContainer>
            <PageHeader title={t('statistics')}></PageHeader>
            {!stats && !commStats && <Loader onAllPage={true} size="5rem" />}
            {session.user.role === 'restaurant' ? <Stats /> : <CommStats />}
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
