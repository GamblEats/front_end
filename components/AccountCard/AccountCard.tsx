import Button from '../globals/Button';
import { CardAccount, PhotoButtons, PhotoContainer, PhotoSection, UserPhoto } from './styles';
import { useTranslation } from 'next-i18next';
import ImgUploader from '../globals/ImgUploader';
import { useSession } from 'next-auth/react';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { userApi } from '../../public/const';
import AccountForm from './AccountForm';
import { use } from 'i18next';

const AccountCard = () => {
    return (
        <CardAccount>
            {/*<PhotoSection>*/}
            {/*    <PhotoContainer>*/}
            {/*        <ImgUploader></ImgUploader>*/}
            {/*        <UserPhoto src={''}></UserPhoto>*/}
            {/*    </PhotoContainer>*/}
            {/*    <PhotoButtons>*/}
            {/*        /!* <Button color="#C0392B" text={t('remove')} icon={faXmark} onClick={func}></Button> *!/*/}
            {/*        /!* <Button color="#E5BF00" text={t('modify')} icon={faPen} onClick={func}></Button> *!/*/}
            {/*    </PhotoButtons>*/}
            {/*</PhotoSection>*/}
            <AccountForm />
        </CardAccount>
    );
};

export default AccountCard;
