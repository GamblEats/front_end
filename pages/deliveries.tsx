import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Deliveries = () => {
    const { data: session }: any = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session.user.role !== 'deliverer') {
            router.push('/home');
        }
    }, []);
    return (
        <>
            <div>Deliveries</div>
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
export default Deliveries;
Deliveries.requireAuth = true;
