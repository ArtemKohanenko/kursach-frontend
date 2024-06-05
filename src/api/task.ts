import ITask from "../types/task";
import axios from "./helpers/axios";

export interface ICreateTask {
    name: string;
    courseId: string;
    comment: string;
}

interface ICreateTaskResponse {
    data: ITask;
}

interface IGetTasksResponse {
    data: ITask[];
}

interface IDeleteTasksResponse {
    status: number;
}

export const getStudentTasks = () => {
    return axios.get<IGetTasksResponse>('/task/student');
};

export const createTask = (body: ICreateTask) => {
    return axios.post<ICreateTaskResponse>('/task', body);
};

export const deleteTask = (taskId: string) => {
    return axios.delete<IDeleteTasksResponse>(`/task/${taskId}`);
};