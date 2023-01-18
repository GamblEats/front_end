import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import {
    CardSettings,
    LangContainer,
    LangImg,
    NotificationCheckbox,
    NotificationContainer,
    NotificationsContainer,
    SectionText,
    SectionTitle,
    SwitchLangContainer,
} from './styles';

export interface LangProps {
    backGround: boolean;
}
const SettingsCard = () => {
    const { t } = useTranslation('common');
    const router = useRouter();
    const { pathname, asPath, query } = router;
    return (
        <CardSettings>
            <div>
                <SectionTitle>{t('language')}</SectionTitle>
                <SwitchLangContainer>
                    <LangContainer
                        backGround={router.locale === 'fr'}
                        onClick={() => {
                            router.push({ pathname, query }, asPath, { locale: 'fr' });
                        }}>
                        <LangImg src="/pictures/frenchFlag.png" />
                        <SectionText>Français</SectionText>
                    </LangContainer>
                    <LangContainer
                        backGround={router.locale === 'en'}
                        onClick={() => {
                            router.push({ pathname, query }, asPath, { locale: 'en' });
                        }}>
                        <LangImg src="/pictures/englishFlag.png" />
                        <SectionText>English</SectionText>
                    </LangContainer>
                </SwitchLangContainer>
            </div>
            <div>
                <SectionTitle>{t('notifications')}</SectionTitle>
                <NotificationsContainer>
                    <NotificationContainer>
                        <NotificationCheckbox type={'checkbox'}></NotificationCheckbox>
                        <SectionText>{t('offersNotifications')}</SectionText>
                    </NotificationContainer>
                    <NotificationContainer>
                        <NotificationCheckbox type={'checkbox'}></NotificationCheckbox>
                        <SectionText>{t('newsNotifications')}</SectionText>
                    </NotificationContainer>
                </NotificationsContainer>
            </div>
        </CardSettings>
    );
};

export default SettingsCard;
