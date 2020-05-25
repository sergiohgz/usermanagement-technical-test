import { AsyncState } from '../../types';

export interface UserData {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

export type UserState = AsyncState<UserData>;
