import '../styles/globals.css';
import type { AppProps } from 'next/app';
import styled from 'styled-components';
import NavBar from '../components/NavBar/NavBar';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SessionProvider, useSession } from 'next-auth/react';
import { useEffect } from 'react';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    @media (max-width: 800px) {
        flex-direction: column-reverse;
    }
`;

const Pages = styled.div`
    display: flex;
    overflow: scroll;
    width: 100%;
    height: 100%;
`;

// @ts-ignore
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
    const router = useRouter();
    return (
        <>
            <Container>
                <ToastContainer position={'top-center'} />
                {!(router.query.form || router.asPath == '/') && <NavBar />}
                <Pages>
                    {Component.requireAuth ? (
                        <Auth>
                            <Component {...pageProps} />
                        </Auth>
                    ) : (
                        <Component {...pageProps} />
                    )}
                </Pages>
            </Container>
        </>
    );
}

const AppWithi18n = appWithTranslation(MyApp);

const AppWithAuth = (props: AppProps) => (
    <SessionProvider session={props.pageProps.session}>
        <AppWithi18n {...props} />
    </SessionProvider>
);

const Auth = ({ children }: any) => {
    const router = useRouter();
    const { status } = useSession();

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/');
        }
    }, [status, router]);

    if (status === 'authenticated') {
        return children;
    }
};

export default AppWithAuth;
