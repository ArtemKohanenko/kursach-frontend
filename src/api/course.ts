import ICourse from '../types/course';
import axios from './helpers/axios';

interface IGetCourses {
    data: ICourse[]
}

export const getCourses = () => {
    return axios.get<IGetCourses>('/course/teacher');
};

export const deleteCourse = (courseId: string) => {
    return axios.delete(`/course/${courseId}`);
};

export const getStudentCourses = () => {
    return axios.get<IGetCourses>('/course/student');
};
