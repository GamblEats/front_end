// --- API URL --- //

export const userApi = 'https://gambleatsuserservice.azurewebsites.net';
export const restaurantApi = 'https://gambleatsrestaurantservice.azurewebsites.net';
export const delivererApi = 'https://gambleatsdelivererservice.azurewebsites.net';

// --- ENUMS --- //

export enum DeliveryStep {
    VALIDATION_PENDING,
    IN_PREPARATION,
    READY_FOR_PICKUP,
    ON_THE_WAY,
    AT_YOUR_DOOR,
    DELIVRED,
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
