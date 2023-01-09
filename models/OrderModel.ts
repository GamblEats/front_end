export interface OrderModel {
    _id?: string;
    menus?: any;
    items?: any;
    restaurant: string;
    deliverer?: string;
    client: string;
    status: string;
    price: number;
    deliveryPrice: number;
    deliveryTime: any;
    startTime: any;
    endTime?: any;
}