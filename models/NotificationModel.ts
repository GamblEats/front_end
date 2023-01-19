export interface NotificationModel {
    id?: string;
    user: string;
    title: string;
    message?: string;
    read?: boolean;
}