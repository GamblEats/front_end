import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';
import { Slogan } from '../styles/globals';
import Menu from '../components/Menu/Menu';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import SignInForm from '../components/AuthForm/SignInForm';
import SignUpForm from '../components/AuthForm/SignUpForm';
import Button from '../components/globals/Button';
import { useEffect, useState } from 'react';

const IndexContainer = styled.div`
    position: relative;
    width: 100%;
`;

const IndexContent = styled.div`
    display: flex;
    align-items: center;
    height: 85%;
    margin: 3rem 7%;
    @media (max-width: 600px) {
        height: 70%;
    }
`;

const BackgroundImg = styled.img`
    animation: spin 80s linear infinite;
    position: fixed;
    bottom: -30em;
    right: -30em;
    width: 75em;
    transition: all 0.5s ease-in-out;
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

const SloganContainer = styled.div`
    display: flex;
    z-index: 1;
    flex-direction: column;
    gap: 2rem;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 1rem;
    @media (min-width: 1000px) {
        display: none;
    }
`;

const Index = () => {
    const router = useRouter();
    const { t } = useTranslation('common');
    const [winWidth, setwinWidth] = useState(0);
    const handleResize = () => {
        setwinWidth(window.innerWidth);
    };
    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
    }, []);
    return (
        <IndexContainer>
            <div className={router.query.form ? 'hideMenu' : ''}>
                <Menu></Menu>
            </div>
            <IndexContent
                style={{
                    justifyContent: router.query.form ? 'center' : 'left',
                    height: router.query.form || winWidth > 1000 ? '85%' : '70%',
                }}>
                <SloganContainer
                    style={{
                        display: router.query.form && winWidth < 1000 ? 'none' : 'flex',
                    }}>
                    <Slogan style={{ fontSize: router.query.form && winWidth < 1200 ? '4rem' : '5rem' }}>
                        {t('slogan')}
                    </Slogan>
                    <ButtonContainer>
                        <Button
                            backgroundColor="#e5bf00"
                            text={t('startEating')}
                            onClick={() => {
                                router.replace({
                                    query: { ...router.query, form: 'signUp' },
                                });
                            }}></Button>
                        <Button
                            text={t('signIn')}
                            onClick={() => {
                                router.replace({
                                    query: { ...router.query, form: 'signIn' },
                                });
                            }}></Button>
                    </ButtonContainer>
                </SloganContainer>
                {router.query.form === 'signIn' && router.query.as === 'client' && <SignInForm role={'client'} />}
                {router.query.form === 'signIn' && router.query.as === 'deliverer' && <SignInForm role={'deliverer'} />}
                {router.query.form === 'signIn' && router.query.as === 'restaurant' && (
                    <SignInForm role={'restaurant'} />
                )}
                {router.query.form === 'signUp' && <SignUpForm />}
            </IndexContent>
            <BackgroundImg
                style={{
                    width: router.query.form
                        ? winWidth < 1200
                            ? '55rem'
                            : '60rem'
                        : winWidth < 1000
                        ? '60rem'
                        : '75rem',
                }}
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
