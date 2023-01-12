import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Statistics = () => {
    const { data: session }: any = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session.user.role !== 'restaurant') {
            router.push('/home');
        }
    }, []);
    return (
        <>
            <div>Statistics</div>
        </>
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
