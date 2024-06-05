import IGroup from "./group";
import ITask from "./task";

export interface ITeacher {
    id: string;
    name: string;
    subject: string;
    groups: IGroup[];
    tasks: ITask[];  
}