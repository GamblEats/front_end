export interface NotificationModel {
    _id?: string;
    user: string;
    title: string;
    message?: string;
    read?: boolean;
}