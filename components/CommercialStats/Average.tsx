import React from 'react';
import { AverageContainer, AverageHeading, AverageText, AverageWrapper, ContainerTitle, TableWrapper } from './styles';
import { faUtensils, faPerson } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'next-i18next';

interface Props {
    nbUser: number;
    nbDeliverer: number;
    nbRestaurateur: number;
    nbRestaurant: number;
}

const Average = ({ nbUser, nbDeliverer, nbRestaurant, nbRestaurateur }: Props) => {
    const { t } = useTranslation('common');

    return (
        <AverageWrapper>
            <ContainerTitle>{t('traffic')}</ContainerTitle>
            <AverageContainer>
                <AverageHeading>Restaurants</AverageHeading>
                <AverageText>
                    <FontAwesomeIcon style={{ fontSize: '1rem', color: '#E5BF00' }} icon={faUtensils} /> {nbRestaurant}{' '}
                    {t('restaurantsAnd')} {nbRestaurateur} {t('xrestorers')}
                </AverageText>
                <AverageHeading>Clients</AverageHeading>
                <AverageText>
                    <FontAwesomeIcon style={{ fontSize: '1rem', color: '#E5BF00' }} icon={faPerson} /> {nbUser}{' '}
                    {t('usersRate')}
                </AverageText>
                <AverageHeading>{t('deliverers')}</AverageHeading>
                <AverageText>
                    <FontAwesomeIcon style={{ fontSize: '1rem', color: '#E5BF00' }} icon={faPerson} /> {nbDeliverer}{' '}
                    {t('deliverersRate')}
                </AverageText>
            </AverageContainer>
        </AverageWrapper>
    );
};

export default Average;
