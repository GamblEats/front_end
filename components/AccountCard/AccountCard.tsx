import Button from '../globals/Button';
import { CardAccount, PhotoButtons, PhotoContainer, PhotoSection, UserPhoto } from './styles';
import { useTranslation } from 'next-i18next';
import ImgUploader from '../globals/ImgUploader';

const AccountCard = () => {
    const { t } = useTranslation('common');

    return (
        <CardAccount>
            <PhotoSection>
                <PhotoContainer>
                    <ImgUploader></ImgUploader>
                    <UserPhoto src={''}></UserPhoto>
                </PhotoContainer>
                <PhotoButtons>
                    {/* <Button color="#C0392B" text={t('remove')} icon={faXmark} onClick={func}></Button> */}
                    {/* <Button color="#E5BF00" text={t('modify')} icon={faPen} onClick={func}></Button> */}
                </PhotoButtons>
            </PhotoSection>
        </CardAccount>
    );
};

export default AccountCard;
