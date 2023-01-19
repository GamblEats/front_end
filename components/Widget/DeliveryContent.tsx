import { useTranslation } from 'next-i18next';
import { DeliveryStep, userApi } from '../../public/const';
import DeliveryStepper from '../DeliveryStepper/DeliveryStepper';
import { DeliveryContainer, StatusContainer } from './styles';
import { Text } from '../../styles/globals';
import { useEffect, useState } from 'react';
import { OrderModel } from '../../models/OrderModel';
import axios from 'axios';
import { useSession } from 'next-auth/react';

const DeliveryContent = () => {
    const { t } = useTranslation('common');
    const { data: session }: any = useSession();
    const [currentOrder, setCurrentOrder] = useState<OrderModel>();
    async function getcurrentOrder() {
        try {
            await axios
                .get(`${userApi}/users/${session.user.id}/orders/pending`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(resp => {
                    setCurrentOrder(resp.data[0]);
                });
        } catch (error) {}
    }
    useEffect(() => {
        getcurrentOrder();
    }, []);
    return (
        <DeliveryContainer>
            <DeliveryStepper
                step={Object.values(DeliveryStep).find(value => value === currentOrder?.status)!}
                isInWidget={true}></DeliveryStepper>
            <StatusContainer>
                <Text opacity={currentOrder?.status == 'VALIDATION_PENDING' ? '0.6' : '1'} size="1.2rem" align="left">
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
                        currentOrder?.status != 'ON_THE_WAY' && currentOrder?.status != 'AT_YOUR_DOOR' ? '0.6' : '1'
                    }
                    size="1.2rem"
                    align="left">
                    {t('onTheWay')}
                </Text>
                <Text opacity={currentOrder?.status != 'AT_YOUR_DOOR' ? '0.6' : '1'} size="1.2rem" align="left">
                    {t('atYourDoor')}
                </Text>
            </StatusContainer>
        </DeliveryContainer>
    );
};

export default DeliveryContent;
