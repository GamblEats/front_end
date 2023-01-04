import '../styles/globals.css';
import type { AppProps } from 'next/app';
import styled from 'styled-components';
import NavBar from '../components/NavBar/NavBar';
import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import { useRouter } from 'next/router';

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

function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    return (
        <>
            <Container>
                {!router.asPath.includes('authentication') && <NavBar />}
                <Pages>
                    <Component {...pageProps} />
                </Pages>
            </Container>
        </>
    );
}

export default appWithTranslation(App);
