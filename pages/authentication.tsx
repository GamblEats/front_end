import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Slogan } from '../styles/globals';
import lunchBox from '/pictures/lunchBox.png';
import { MenuImg, FlexBox } from '../components/AuthForm/styles';
import SignUpForm from '../components/AuthForm/SignUpForm';
import SignInForm from '../components/AuthForm/SignInForm';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useTranslation } from 'next-i18next';

const authentication = () => {
    const router = useRouter();
    const { t } = useTranslation('common');
    useEffect(() => {
        if (!router.query.form) {
            router.replace({
                query: { ...router.query, form: 'signIn' },
            });
        }
    }, [router]);
    return (
        <FlexBox>
            <Slogan>{t('slogan')}</Slogan>
            {router.query.form === 'signIn' && <SignInForm />}
            {router.query.form === 'signUp' && <SignUpForm />}
            <div></div>
            <MenuImg src={'/pictures/lunchBox.png'} alt={'lunchBox'} />
        </FlexBox>
    );
};
export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['common'])),
        },
    };
};
export default authentication;
