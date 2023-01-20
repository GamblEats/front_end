import { useTranslation } from 'next-i18next';
import { DeliveryStep } from '../../public/const';
import DeliveryStepper from '../DeliveryStepper/DeliveryStepper';
import { DeliveryContainer, StatusContainer } from './styles';
import { Text } from '../../styles/globals';
import { OrderModel } from '../../models/OrderModel';
import Loader from '../globals/Loader';
import styled from 'styled-components';

const NoOrder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    width: 100%;
    padding: 3rem;
`;

interface Props {
    currentOrder: OrderModel | undefined;
    isLoading: boolean;
}

const DeliveryContent = ({ currentOrder, isLoading }: Props) => {
    const { t } = useTranslation('common');
    console.log(currentOrder);
    return (
        <DeliveryContainer>
            {isLoading && <Loader size={'2rem'} />}
            {!isLoading && currentOrder == undefined && <NoOrder>{t('noCurrent')}</NoOrder>}
            {!isLoading && currentOrder != undefined && (
                <>
                    <DeliveryStepper
                        step={Object.values(DeliveryStep).find(value => value === currentOrder?.status)!}
                        isInWidget={true}></DeliveryStepper>
                    <StatusContainer>
                        <Text
                            opacity={currentOrder?.status == 'VALIDATION_PENDING' ? '0.6' : '1'}
                            size="1.2rem"
                            align="left">
                            {t('validated')}
                        </Text>
                        <Text
                            opacity={
                                currentOrder?.status == 'IN_PREPARATION' ||
                                currentOrder?.status == 'READY_TO_PICKUP' ||
                                currentOrder?.status == 'ON_THE_WAY' ||
                                currentOrder?.status == 'AT_YOUR_DOOR'
                                    ? '1'
                                    : '0.6'
                            }
                            size="1.2rem"
                            align="left">
                            {t('prepared')}
                        </Text>
                        <Text
                            opacity={
                                currentOrder?.status != 'ON_THE_WAY' && currentOrder?.status != 'AT_YOUR_DOOR'
                                    ? '0.6'
                                    : '1'
                            }
                            size="1.2rem"
                            align="left">
                            {t('onTheWay')}
                        </Text>
                        <Text opacity={currentOrder?.status != 'AT_YOUR_DOOR' ? '0.6' : '1'} size="1.2rem" align="left">
                            {t('atYourDoor')}
                        </Text>
                    </StatusContainer>
                </>
            )}
        </DeliveryContainer>
    );
};

export default DeliveryContent;
