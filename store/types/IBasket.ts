import { array } from 'yup';

interface IBasket {
    deleteAsk: boolean;
    price: number;
    items: Array<string>;
    menus: Array<string>;
    restaurantId: string;
    addItem: (item: any) => void;
    deleteItem: (item: any) => void;
    addMenu: (menu: any) => void;
    deleteMenu: (menu: any) => void;
    deleteCard: () => void;
    closeAsk: () => void;
}

export default IBasket;
