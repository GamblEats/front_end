export interface RatingModel {
    _id?: string;
    client: string;
    restaurant: string;
    notation: number;
    title?: string;
    message?: string;
    time: any;
}