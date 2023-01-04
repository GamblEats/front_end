import { faCheck, faClock, faCoins, faRoad, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
}

const PendingOrder = ({ isRestaurant }: Props) => {
    return (
        <OrderContainer>
            {isRestaurant ? (
                <InfoContainer>
                    <DeliveryInfos>
                        <>
                            <OrderPrice>37.98€</OrderPrice>
                            <OrderReference>N°1964</OrderReference>
                        </>
                        <UserAddress>161 rue Pierre Mauroy, Lille</UserAddress>
                    </DeliveryInfos>
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
                    <FontAwesomeIcon fontSize={'large'} color="#fefefe" icon={faCheck}></FontAwesomeIcon>
                </Button>
                <Button color="#C0392B">
                    <FontAwesomeIcon fontSize={'large'} color="#fefefe" icon={faXmark}></FontAwesomeIcon>
                </Button>
            </ButtonContainer>
        </OrderContainer>
    );
};

export default PendingOrder;
