import { RestaurantModel } from '../../models/RestaurantModel';

interface IRestaurant {
    restaurants: Array<any>;
    openedRestaurant: any;
    error: boolean;
    loading: boolean;
    getRestaurants: () => void;
    setOpenedRestaurant: any;
}

export default IRestaurant;
