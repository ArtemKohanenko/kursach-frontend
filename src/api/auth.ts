import { IStudent, ITeacher } from '../types/user';
import axios from './helpers/axios';

interface ILogin {
    name: string,
    password: string
}

interface ILoginResponse {
    access_token: string
}

interface IGetProfileResponse {
    id: string;
    name: string;
    student: IStudent;
    teacher: ITeacher;
}

export const login = (body: ILogin) => {
    return axios.post<ILoginResponse>('/auth/login', body);
};

export const getCurrentProfile = () => {
    return axios.get<IGetProfileResponse>('/auth/profile');
};