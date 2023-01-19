import { GetStaticProps } from 'next';
import { useSession } from 'next-auth/react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';
import Button from '../components/globals/Button';
import PageHeader from '../components/globals/PageHeader';
import ReferralChips from '../components/ReferralChips/ReferralChips';
import {
    CodeContainer,
    CodeInput,
    CodeInputContainer,
    ListContainer,
    Multiplier,
    MultiplierContainer,
    MultiplierText,
    PageContainer,
    ReferralContainer,
    Text,
} from '../styles/globals';

export interface TextProps {
    size: string;
    weight?: string;
    italic?: boolean;
}

const Referral = () => {
    const { data: session }: any = useSession();
    const { t } = useTranslation('common');
    const [buttonColor, setButtonColor] = useState('#e5bf00');
    const [buttonText, setButtonText] = useState('copie');
    console.log(session.user);

    async function copieCode() {
        await navigator.clipboard.writeText(session.user.codeRef);
        setButtonColor('#27ae60');
        setButtonText('copied');
        setTimeout(() => {
            setButtonColor('#e5bf00');
            setButtonText('copie');
        }, 1000);
    }
    return (
        <PageContainer>
            <PageHeader title={t('referral')}></PageHeader>
            <ReferralContainer>
                <MultiplierContainer>
                    <Multiplier>
                        x
                        {1 +
                            0.1 *
                                session.user.referralList.filter((referral: any) => referral.isActivated == true)
                                    .length}
                    </Multiplier>
                    <MultiplierText>{t('multiplierText')}</MultiplierText>
                </MultiplierContainer>
                <CodeContainer>
                    <Text size="2rem" weight="600">
                        {t('codeTitle')}
                    </Text>
                    <Text size="1rem">{t('codeText')}</Text>
                    <CodeInputContainer>
                        <CodeInput>
                            <Text size="1rem">{session.user.codeRef}</Text>
                            <Button text={t(buttonText)} backgroundColor={buttonColor} onClick={copieCode}></Button>
                        </CodeInput>
                        <Text size="0.7rem" italic={true}>
                            {t('codeInfo')}
                        </Text>
                    </CodeInputContainer>
                </CodeContainer>
                <ListContainer>
                    {session.user.referralList.map((referral: { name: string; isActivated: boolean }, i: number) => (
                        <ReferralChips key={i} name={referral.name} isActivated={referral.isActivated}></ReferralChips>
                    ))}
                </ListContainer>
            </ReferralContainer>
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
export default Referral;
Referral.requireAuth = true;
