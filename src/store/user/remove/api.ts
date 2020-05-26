import { AxiosPromise, AxiosRequestConfig } from 'axios';

import apiClient from '../../../config/apiClient';

const removeUser = (userId: string): AxiosPromise<void> => {
    const config: AxiosRequestConfig = {
        method: 'DELETE',
        url: `/users/${userId}`,
    };
    return apiClient(config);
};

const api = {
    removeUser,
};

export default api;
