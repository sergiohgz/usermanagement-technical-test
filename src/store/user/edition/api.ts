import { AxiosPromise, AxiosRequestConfig } from 'axios';

import apiClient from '../../../config/apiClient';
import { UserEditionData } from './types';

const editUser = (
    userId: string,
    data: UserEditionData
): AxiosPromise<void> => {
    const config: AxiosRequestConfig = {
        method: 'PUT',
        url: `/users/${userId}`,
        data: {
            email: data.email,
            /* eslint-disable-next-line @typescript-eslint/camelcase */
            first_name: data.firstName,
            /* eslint-disable-next-line @typescript-eslint/camelcase */
            last_name: data.lastName,
        },
    };
    return apiClient(config);
};

const api = {
    editUser,
};

export default api;
