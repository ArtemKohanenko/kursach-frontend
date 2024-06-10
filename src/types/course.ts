import IGroup from "./group";
import ITask from "./task";
import { ITeacher } from "./teacher";

export default interface ICourse {
    id: string;
    name: string;
    subject: string;
    groups?: IGroup[];
    // tasks?: ITask[];    
    // teachers?: ITeacher[];
}