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
import { useEffect, useState } from 'react';
import RestaurantDetails from '../RestaurantDetails/RestaurantDetails';
import useStore from '../../store/useStore';

interface Props {
    name: string;
    pic: string;
    description: string;
    deliveryPrice: number;
    deliveryTime: string;
    rating: number;
    minWidth?: string;
    id: string;
}

const RestaurantCard = ({ id, name, pic, description, deliveryPrice, deliveryTime, rating, minWidth }: Props) => {
    const router = useRouter();
    const [detailsIsOpen, setDetailsIsOpen] = useState<boolean>(false);
    const { setOpenedRestaurant, openedRestaurant } = useStore(state => state);

    useEffect(() => {
        if (router.query.id === id) {
            if (!openedRestaurant) {
                setOpenedRestaurant(id);
            }
            setDetailsIsOpen(true);
        } else if (detailsIsOpen) {
            setDetailsIsOpen(false);
        }
    }, [openedRestaurant]);
    return (
        <div
            onClick={() => {
                setOpenedRestaurant(id);
                router.replace({
                    query: { ...router.query, id: id },
                });
            }}>
            <Card style={{ minWidth: minWidth }}>
                <CardPicture src={pic} alt="Restaurant Picture" />
                <CardContent>
                    <CardTitle>{name}</CardTitle>
                    <CardDetailsContainer>
                        <CardDeliveryDetails>
                            <CardDeliveryDetail>{deliveryPrice} €</CardDeliveryDetail>
                            <CardDeliveryDetail>{deliveryTime}</CardDeliveryDetail>
                        </CardDeliveryDetails>
                        <CardRating>{rating}</CardRating>
                    </CardDetailsContainer>
                </CardContent>
            </Card>
            {/* Details Modal*/}
            {detailsIsOpen && <RestaurantDetails />}
        </div>
    );
};

export default RestaurantCard;
