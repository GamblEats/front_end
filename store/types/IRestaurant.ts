import { RestaurantModel } from '../../models/RestaurantModel';

interface IRestaurant {
    restaurants: Array<RestaurantModel>;
    error: boolean;
    loading: boolean;
    getRestaurants: () => void;
}

export default IRestaurant;
