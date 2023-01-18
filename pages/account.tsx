import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import styled from 'styled-components';
import AccountCard from '../components/AccountCard/AccountCard';
import SettingsCard from '../components/AccountCard/SettingsCard';
import PageHeader from '../components/globals/PageHeader';
import { PageContainer } from '../styles/globals';
const Container = styled.div`
    display: flex;
    gap: 3em;
    width: 100%;
`;

const Account = () => {
    const { t } = useTranslation('common');
    return (
        <PageContainer>
            <PageHeader title={t('account')}></PageHeader>
            <Container>
                <AccountCard></AccountCard>
                <SettingsCard></SettingsCard>
            </Container>
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
export default Account;
Account.requireAuth = true;
