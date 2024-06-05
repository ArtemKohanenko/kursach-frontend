import IGroup from "./group";
import ITask from "./task";

export default interface ICourse {
    id: string;
    name: string;
    subject: string;
    groups: IGroup[];
    tasks: ITask[];    
}