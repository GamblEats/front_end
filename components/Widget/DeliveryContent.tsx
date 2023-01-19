import { useTranslation } from 'next-i18next';
import { DeliveryStep } from '../../public/const';
import DeliveryStepper from '../DeliveryStepper/DeliveryStepper';
import { DeliveryContainer } from './styles';

const DeliveryContent = () => {
    const { t } = useTranslation('common');
    return (
        <DeliveryContainer>
            <DeliveryStepper step={DeliveryStep.IN_PREPARATION} isInWidget={true}></DeliveryStepper>
        </DeliveryContainer>
    );
};

export default DeliveryContent;
