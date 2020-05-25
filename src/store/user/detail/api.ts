import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';

import apiClient from '../../../config/apiClient';
import { UserData } from './types';

interface UserResponse {
    data: Omit<UserData, 'firstName' | 'lastName'> & {
        first_name: UserData['firstName'];
        last_name: UserData['lastName'];
    };
}

const getUser = (userId: string): AxiosPromise<UserData> => {
    const config: AxiosRequestConfig = {
        method: 'GET',
        url: `/users/${userId}`,
    };
    return apiClient(config).then((response: AxiosResponse<UserResponse>) => {
        const parsedData: UserData = {
            id: response.data.data.id,
            firstName: response.data.data.first_name,
            lastName: response.data.data.last_name,
            email: response.data.data.email,
        };
        return { ...response, data: parsedData };
    });
};

const api = {
    getUser,
};

export default api;
