import ITask from "./task";
import { IStudent, ITeacher } from "./user";

export interface IWork {
    id: string;
    comment?: string;
    data: string;
    status: string;
    task: ITask;
    student: IStudent
    teacher: ITeacher;
}
