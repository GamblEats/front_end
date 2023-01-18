import { faBox } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { OrderModel } from '../../models/OrderModel';
import { DeliveryStep } from '../../public/const';
import Button from '../globals/Button';
import OrderStatus from './OrderStatus';
import {
    CurrentOrderContainer,
    CurrOrderContainer,
    CurrOrderHeader,
    NoOrderContainer,
    NoOrderText,
    OrderTimer,
} from './styles';

interface Props {
    currentOrder: OrderModel;
}

const CurrentOrder = ({ currentOrder }: Props) => {
    const { t } = useTranslation('common');
    const router = useRouter();
    return (
        <CurrentOrderContainer>
            {currentOrder ? (
                <CurrOrderContainer>
                    <CurrOrderHeader>
                        <OrderTimer>Today in 20 minutes</OrderTimer>
                        <OrderStatus status={DeliveryStep.ON_THE_WAY}></OrderStatus>
                    </CurrOrderHeader>
                </CurrOrderContainer>
            ) : (
                <NoOrderContainer>
                    <NoOrderText>{t('noCurrent')}</NoOrderText>
                    <Button
                        backgroundColor="#E5BF00"
                        text={t('order')}
                        onClick={() => router.push('/restaurants')}
                        icon={faBox}></Button>
                </NoOrderContainer>
            )}
        </CurrentOrderContainer>
    );
};

export default CurrentOrder;
