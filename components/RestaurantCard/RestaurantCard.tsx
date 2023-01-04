import { useRouter } from 'next/router';
import {
    Card,
    CardContent,
    CardDeliveryDetail,
    CardDeliveryDetails,
    CardDetailsContainer,
    CardPicture,
    CardRating,
    CardTitle,
} from './styles';

interface Props {
    name: string;
    pic: string;
    description: string;
    deliveryPrice: number;
    deliveryTime: string;
    rating: number;
}

const RestaurantCard = ({ name, pic, description, deliveryPrice, deliveryTime, rating }: Props) => {
    const router = useRouter();

    return (
        <Card>
            <CardPicture src={pic} alt="Restaurant Picture" />
            <CardContent>
                <CardTitle>{name}</CardTitle>
                <CardDetailsContainer>
                    <CardDeliveryDetails>
                        <CardDeliveryDetail>{deliveryPrice}</CardDeliveryDetail>
                        <CardDeliveryDetail>{deliveryTime}</CardDeliveryDetail>
                    </CardDeliveryDetails>
                    <CardRating>{rating}</CardRating>
                </CardDetailsContainer>
            </CardContent>
        </Card>
    );
};

export default RestaurantCard;
