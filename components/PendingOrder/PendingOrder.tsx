import { faCheck, faClock, faCoins, faRoad, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OrderModel } from '../../models/OrderModel';
import ItemList from '../Orders/ItemList';
import DeliveryInfo from './DeliveryInfo';
import {
    Address,
    Addresses,
    AddressesPipeline,
    Button,
    ButtonContainer,
    DeliveryInfos,
    InfoContainer,
    OrderContainer,
    OrderPrice,
    OrderReference,
    PipelineCircle,
    PipelineLine,
    RestaurantAddress,
    RestaurantName,
    UserAddress,
} from './styles';

interface Props {
    isRestaurant: boolean;
    order: OrderModel;
    onValidation: () => void;
    onReject: () => void;
}

const PendingOrder = ({ isRestaurant, order, onValidation, onReject }: Props) => {
    return (
        <OrderContainer>
            {isRestaurant ? (
                <InfoContainer>
                    <DeliveryInfos>
                        <div>
                            <OrderPrice>{order.price}€</OrderPrice>
                            <OrderReference>N°{Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)}</OrderReference>
                        </div>
                        <UserAddress>{order.address}</UserAddress>
                    </DeliveryInfos>
                    <ItemList itemList={order.items.concat(order.menus)}></ItemList>
                </InfoContainer>
            ) : (
                <InfoContainer>
                    <DeliveryInfos>
                        <DeliveryInfo icon={faRoad} value="6km"></DeliveryInfo>
                        <DeliveryInfo icon={faClock} value="13min"></DeliveryInfo>
                        <DeliveryInfo icon={faCoins} value="4.70€"></DeliveryInfo>
                    </DeliveryInfos>
                    <AddressesPipeline>
                        <PipelineCircle></PipelineCircle>
                        <PipelineLine></PipelineLine>
                        <PipelineCircle></PipelineCircle>
                    </AddressesPipeline>
                    <Addresses>
                        <RestaurantAddress>
                            <Address>100 rue Colbert, Lomme</Address>
                            <RestaurantName>Nigburger</RestaurantName>
                        </RestaurantAddress>
                        <Address>161 rue Pierre Mauroy, Lille</Address>
                    </Addresses>
                </InfoContainer>
            )}
            <ButtonContainer>
                <Button color="#27ae60">
                    <FontAwesomeIcon
                        fontSize={'1.4rem'}
                        color="#fefefe"
                        icon={faCheck}
                        onClick={onValidation}></FontAwesomeIcon>
                </Button>
                <Button color="#C0392B">
                    <FontAwesomeIcon
                        fontSize={'1.4rem'}
                        color="#fefefe"
                        icon={faXmark}
                        onClick={onReject}></FontAwesomeIcon>
                </Button>
            </ButtonContainer>
        </OrderContainer>
    );
};

export default PendingOrder;
