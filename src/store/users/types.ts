import { AsyncState, ListData } from '../types';

export interface UsersItemData {
    id: number;
    firstName: string;
    lastName: string;
}

export type UsersData = ListData<UsersItemData>;

export type UsersState = AsyncState<UsersData>;
