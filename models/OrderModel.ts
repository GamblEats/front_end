import { RestaurantModel } from "./RestaurantModel";

export interface OrderModel {
    id?: string;
    menus?: any;
    items?: any;
    restaurant: RestaurantModel;
    deliverer?: string;
    client: string;
    status: string;
    price: number;
    deliveryPrice: number;
    deliveryTime: any;
    startTime: any;
    endTime?: any;
}