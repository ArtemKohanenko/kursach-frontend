import ICourse from "./course";

export default interface ITask {
    id: string;
    name: string;
    comment?: string;
    courseId: string;
    // course?: ICourse;
}