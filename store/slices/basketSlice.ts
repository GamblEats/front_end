import axios from 'axios';
import { StateCreator } from 'zustand';
import IBasket from '../types/IBasket';

const basketSlice: StateCreator<IBasket> = (set, get) => ({
    deleteAsk: false,
    restaurantId: '',
    price: 0,
    items: [],
    menus: [],
    addItem: (item, restID) => {
        set((state: IBasket) => {
            const newState = { ...state };
            if (!newState.restaurantId) {
                newState.restaurantId = restID;
                newState.items = [item, ...newState.items];
                newState.price = Number((newState.price + item.price).toFixed(2));
            } else if (newState.restaurantId === restID) {
                newState.items = [item, ...newState.items];
                newState.price = Number((newState.price + item.price).toFixed(2));
            } else {
                newState.deleteAsk = true;
            }
            return newState;
        });
    },
    deleteItem: item => {
        set((state: IBasket) => {
            const newState = { ...state };
            if (newState.items.length === 1 && newState.menus.length === 0) {
                newState.items.splice(newState.items.indexOf(item), 1);
                newState.price = Number((newState.price - item.price).toFixed(2));
                newState.restaurantId = '';
            } else if (newState.items.length > 0) {
                newState.items.splice(newState.items.indexOf(item), 1);
                newState.price = Number((newState.price - item.price).toFixed(2));
            }

            return newState;
        });
    },
    addMenu: menu => {
        set((state: IBasket) => {
            const newState = { ...state };
            if (!newState.restaurantId) {
                newState.restaurantId = menu.restaurant;
                newState.menus = [menu, ...newState.menus];
                newState.price = Number((newState.price + menu.price).toFixed(2));
            } else if (newState.restaurantId === menu.restaurant) {
                newState.menus = [menu, ...newState.menus];
                newState.price = Number((newState.price + menu.price).toFixed(2));
            } else {
                newState.deleteAsk = true;
            }
            return newState;
        });
    },
    deleteMenu: menu => {
        set((state: IBasket) => {
            const newState = { ...state };
            if (newState.menus.length === 1 && newState.items.length === 0) {
                newState.menus.splice(newState.menus.indexOf(menu), 1);
                newState.price = Number((newState.price - menu.price).toFixed(2));
                newState.restaurantId = '';
            } else if (newState.menus.length > 0) {
                newState.menus.splice(newState.menus.indexOf(menu), 1);
                newState.price = Number((newState.price - menu.price).toFixed(2));
            }

            return newState;
        });
    },
    deleteCard: () => {
        set((state: IBasket) => {
            const newState = { ...state };
            newState.items = [];
            newState.menus = [];
            newState.price = 0;
            newState.restaurantId = '';
            newState.deleteAsk = false;
            return newState;
        });
    },
    closeAsk: () => {
        set((state: IBasket) => {
            const newState = { ...state };
            newState.deleteAsk = false;
            return newState;
        });
    },
});

export default basketSlice;
