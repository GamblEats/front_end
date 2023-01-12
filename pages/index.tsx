import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { Slogan } from '../styles/globals';
import Menu from '../components/Menu/Menu';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import SignInForm from '../components/AuthForm/SignInForm';
import SignUpForm from '../components/AuthForm/SignUpForm';

const IndexContainer = styled.div`
    position: relative;
    width: 100%;
`;

const IndexContent = styled.div`
    display: flex;
    align-items: center;
    height: 86%;
    margin: 3rem 7%;
`;

const BackgroundImg = styled.img`
    position: fixed;
    bottom: -23em;
    right: -20em;
    width: 50em;
    transition: all 0.5s ease-in-out;
    @media (max-width: 900px) {
        width: 40rem;
    }
`;

const Index = () => {
    const router = useRouter();
    const { t } = useTranslation('common');
    return (
        <IndexContainer>
            <div className={router.query.form ? 'hideMenu' : ''}>
                <Menu></Menu>
            </div>
            <IndexContent>
                <Slogan>{t('slogan')}</Slogan>
                {router.query.form === 'signIn' && <SignInForm />}
                {router.query.form === 'signUp' && <SignUpForm />}
            </IndexContent>
            <BackgroundImg
                style={{ transform: router.query.form ? '' : 'scale(1.8)' }}
                src={'/pictures/lunchBox.png'}
                alt={'lunchBox'}
            />
        </IndexContainer>
    );
};
export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ['common'])),
        },
    };
};

export default Index;
Index.requireAuth = false;
