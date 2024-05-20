export interface IUser {
    id: string;
    name: string;
    teacher?: ITeacher;
    student?: IStudent;
}

export interface ITeacher {
    id: string;
}

export interface IStudent {
    id: string;
}