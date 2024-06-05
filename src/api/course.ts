import ICourse from '../types/course';
import axios from './helpers/axios';

interface IGetCourses {
    data: ICourse[]
}

export const getCourses = () => {
    return axios.get<IGetCourses>('/course');
};

export const deleteCourse = (courseId: string) => {
    return axios.delete(`/course/${courseId}`);
};