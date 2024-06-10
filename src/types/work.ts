import ICourse from "./course";
import { IStudent } from "./student";
import ITask from "./task";
import { ITeacher } from "./teacher";

export interface IWork {
    id: string;
    comment?: string;
    data: string;
    status: string;
    taskId: string;
    studentId: string;
    // task?: ITask;    
    student?: IStudent;
}
