import React from 'react';
import { AverageContainer, AverageHeading, AverageText, AverageWrapper, ContainerTitle, TableWrapper } from './styles';
import { faStopwatch, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
    average: number;
    averageTime: number;
}

const Average = ({ average, averageTime }: Props) => {
    return (
        <AverageWrapper>
            <ContainerTitle>Average</ContainerTitle>
            <AverageContainer>
                <AverageHeading>Average delivery time in the last 30 days</AverageHeading>
                <AverageText>
                    <FontAwesomeIcon style={{ fontSize: '2.5rem', color: '#E5BF00' }} icon={faStopwatch} />{' '}
                    {averageTime} min
                </AverageText>
                <AverageHeading>Average order price in the last 30 days</AverageHeading>
                <AverageText>
                    <FontAwesomeIcon style={{ fontSize: '2.5rem', color: '#E5BF00' }} icon={faMoneyBill} /> {average}€
                </AverageText>
            </AverageContainer>
        </AverageWrapper>
    );
};

export default Average;
