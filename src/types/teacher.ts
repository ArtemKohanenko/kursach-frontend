import IGroup from "./group";
import ITask from "./task";
import { IUser } from "./user";

export interface ITeacher {
    id: string;
    name: string;
    subject: string;
    userId: string;
    // groups?: IGroup[];
    // tasks?: ITask[];
    user?: IUser;
}