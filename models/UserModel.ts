export interface UserModel {
    _id?: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    type: any;
    orders?: object;
    referral?: string;
    address: string;
    additionnal?: string;
    paymentMethods?: any;
}