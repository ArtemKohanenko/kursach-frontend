import IGroup from '../types/group';
import axios from './helpers/axios';

interface IGetTeacherGroups {
    data: IGroup[]
}

export const getGroups = () => {
    return axios.get<IGetTeacherGroups>('/group/teacher');
};
