import { AxiosPromise, AxiosRequestConfig } from 'axios';

import apiClient from '../../config/apiClient';
import { LoginForm, UserToken } from './types';

const login = (data: LoginForm): AxiosPromise<UserToken> => {
    const config: AxiosRequestConfig = {
        method: 'POST',
        url: `/login`,
        data,
    };
    return apiClient(config);
};

const api = {
    login,
};

export default api;
