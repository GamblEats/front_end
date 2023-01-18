import { faBox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'next-i18next';
import { OrderStatusContainer, Status } from './styles';

interface Props {
    status: string;
    hide?: boolean;
}
export interface OrderStatusContainerProps {
    hide: boolean;
}

const OrderStatus = ({ status, hide = false }: Props) => {
    const { t } = useTranslation('common');
    function getStatusInfo(color: boolean) {
        switch (status) {
            case 'DELIVERED':
                return color ? '#27AE60' : t('orderDelivred');
            case 'CANCELED':
                return color ? '#C0392B' : t('orderCanceled');
            default:
                return color ? '#E67E22' : t('orderInProgress');
        }
    }
    return (
        <OrderStatusContainer hide={hide} color={getStatusInfo(true)}>
            <Status>{getStatusInfo(false)}</Status>
            <FontAwesomeIcon fontSize="2.5rem" icon={faBox}></FontAwesomeIcon>
        </OrderStatusContainer>
    );
};

export default OrderStatus;
