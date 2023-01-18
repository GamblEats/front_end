import { array } from 'yup';

interface IBasket {
    deleteAsk: boolean;
    price: number;
    items: Array<any>;
    menus: Array<any>;
    restaurantId: string;
    addItem: (item: any, restID: string) => void;
    deleteItem: (item: any) => void;
    addMenu: (menu: any) => void;
    deleteMenu: (menu: any) => void;
    deleteCard: () => void;
    closeAsk: () => void;
}

export default IBasket;
