import { IWork } from "../types/work";
import axios from "./helpers/axios";

export interface ISendWork {
    comment?: string;
    data: string;
    taskId: string;
}

interface ISendWorkResponse {
    data: IWork;
}

interface IGetWorksResponse {
    data: IWork[];
}

export const getStudentWorks = () => {
    return axios.get<IGetWorksResponse>('/work/student');
};

export const getTeacherWorks = () => {
    return axios.get<IGetWorksResponse>('/work/teacher');
};

export const createWork = (body: ISendWork) => {
    return axios.post<ISendWorkResponse>('/work', body);
};