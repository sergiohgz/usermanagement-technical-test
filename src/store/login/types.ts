import { AsyncState } from '../types';

export interface LoginForm {
    email: string;
    password: string;
}

export type Token = string;

export interface UserToken {
    token?: UserToken;
}

export type LoginState = AsyncState<UserToken>;
