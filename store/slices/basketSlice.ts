import axios from 'axios';
import { StateCreator } from 'zustand';
import IBasket from '../types/IBasket';

const basketSlice: StateCreator<IBasket> = (set, get) => ({
    deleteAsk: false,
    restaurantId: '',
    price: 0,
    items: [],
    menus: [],
    addItem: item => {
        set((state: IBasket) => {
            const newState = { ...state };
            if (!newState.restaurantId) {
                newState.restaurantId = item.restaurant;
                newState.items = [item.id, ...newState.items];
                newState.price = newState.price + item.price;
            } else if (newState.restaurantId === item.restaurant) {
                newState.items = [item.id, ...newState.items];
                newState.price = newState.price + item.price;
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
                newState.items.splice(newState.items.indexOf(item.id), 1);
                newState.price = newState.price - item.price;
                newState.restaurantId = '';
            } else if (newState.items.length > 0) {
                newState.items.splice(newState.items.indexOf(item.id), 1);
                newState.price = newState.price - item.price;
            }

            return newState;
        });
    },
    addMenu: menu => {
        set((state: IBasket) => {
            const newState = { ...state };
            if (!newState.restaurantId) {
                newState.restaurantId = menu.restaurant;
                newState.menus = [menu.id, ...newState.menus];
                newState.price = newState.price + menu.price;
            } else if (newState.restaurantId === menu.restaurant) {
                newState.menus = [menu.id, ...newState.menus];
                newState.price = newState.price + menu.price;
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
                newState.menus.splice(newState.menus.indexOf(menu.id), 1);
                newState.price = newState.price - menu.price;
                newState.restaurantId = '';
            } else if (newState.menus.length > 0) {
                newState.menus.splice(newState.menus.indexOf(menu.id), 1);
                newState.price = newState.price - menu.price;
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
