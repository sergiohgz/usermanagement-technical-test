import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';

import apiClient from '../../config/apiClient';
import { UsersData, UsersItemData } from './types';
import { ListData } from '../types';

type ListDataResponse<T> = Omit<ListData<T>, 'perPage' | 'totalPages'> & {
    per_page: ListData<T>['perPage'];
    total_pages: ListData<T>['totalPages'];
};

type UserItemResponse = Omit<UsersItemData, 'firstName' | 'lastName'> & {
    first_name: UsersItemData['firstName'];
    last_name: UsersItemData['lastName'];
};

const getUsers = (): AxiosPromise<UsersData> => {
    const config: AxiosRequestConfig = {
        method: 'GET',
        url: '/users',
    };
    return apiClient(config).then(
        (response: AxiosResponse<ListDataResponse<UserItemResponse>>) => {
            const parsedData: UsersData = {
                page: response.data.page,
                perPage: response.data.per_page,
                total: response.data.total,
                totalPages: response.data.total_pages,
                data: response.data.data.map((item: UserItemResponse) => ({
                    id: item.id,
                    firstName: item.first_name,
                    lastName: item.last_name,
                })),
            };
            return { ...response, data: parsedData };
        }
    );
};

const api = {
    getUsers,
};

export default api;
