import { IUser } from "./user";

export interface IStudent {
    id: string;
    user?: IUser;
    userId: string;
}