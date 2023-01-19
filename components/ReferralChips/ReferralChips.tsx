import { useTranslation } from 'next-i18next';
import { ChipsContainer, ChipsName, ChipsStatus } from './styles';

interface Props {
    name: string;
    isActivated: boolean;
}

const ReferralChips = ({ name, isActivated }: Props) => {
    const { t } = useTranslation('common');
    return (
        <ChipsContainer>
            <ChipsName>{name}</ChipsName>
            <ChipsStatus color={isActivated ? '#27AE60' : '#E67E22'}>
                {isActivated ? t('referralActivated') : t('referralWaiting')}
            </ChipsStatus>
        </ChipsContainer>
    );
};

export default ReferralChips;
