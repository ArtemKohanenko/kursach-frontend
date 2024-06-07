import ICourse from "./course";
import ITask from "./task";
import { ITeacher } from "./teacher";
import { IStudent } from "./user";

export interface IWork {
    id: string;
    comment?: string;
    data: string;
    status: string;
    task: ITask;    
    student: IStudent;
}
