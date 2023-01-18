export interface RestaurantModel {
    id: string;
    owner?: string;
    pic: string;
    name: string;
    description: string;
    categories?: any;
    rating: number;
    deliveryPrice: number;
    deliveryTime: string;
    address: string;
}
