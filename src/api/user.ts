import axios from './helpers/axios';

interface IGetUser {
    name: string,
    password: string
}

interface IGetUserResponse {
    access_token: string
}
