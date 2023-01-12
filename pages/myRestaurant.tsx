import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { use } from 'i18next';
import { useRouter } from 'next/router';

const MyRestaurant = () => {
    const { data: session }: any = useSession();
    const router = useRouter();

    useEffect(() => {
        if (session.user.role !== 'restaurant') {
            router.push('/home');
        }
    }, []);
    return (
        <>
            <div>My Restaurant</div>
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
export default MyRestaurant;
MyRestaurant.requireAuth = true;
