// --- API URL --- //

export const userApi = 'https://gambleatsuserservice.azurewebsites.net';
export const restaurantApi = 'https://gambleatsrestaurantservice.azurewebsites.net';
export const delivererApi = 'https://gambleatsdelivererservice.azurewebsites.net';

// --- ENUMS --- //

export enum DeliveryStep {
    VALIDATION_PENDING = 'VALIDATION_PENDING',
    IN_PREPARATION = 'IN_PREPARATION',
    READY_TO_PICKUP = 'READY_TO_PICKUP',
    ON_THE_WAY = 'ON_THE_WAY',
    AT_YOUR_DOOR = 'AT_YOUR_DOOR',
    DELIVERED = 'DELIVERED',
    CANCELED = 'CANCELED',
}

export enum LineStep {
    EMPTY,
    HALF,
    COMPLETE,
}

// --- Months --- //

export const months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
];
