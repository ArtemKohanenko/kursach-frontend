import ICourse from "./course";

export default interface ITask {
    id: string;
    name: string;
    comment: string;
    course: ICourse;
}