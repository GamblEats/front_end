import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DeliveryInfoContainer, InfoValue } from './styles';

interface Props {
    icon: IconProp;
    value: string;
}

const PendingOrder = ({ icon, value }: Props) => {
    return (
        <DeliveryInfoContainer>
            <FontAwesomeIcon color="#143642" icon={icon}></FontAwesomeIcon>
            <InfoValue>{value}</InfoValue>
        </DeliveryInfoContainer>
    );
};

export default PendingOrder;
