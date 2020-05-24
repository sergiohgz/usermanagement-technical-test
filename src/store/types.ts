import { Action, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';

export interface AsyncState<AsyncData = undefined> {
    asyncLoading: boolean;
    asyncError?: boolean;
    error?: string;
    asyncData?: AsyncData;
}

export interface ListData<Data> {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
    data: Data[];
}

export type AppThunk<T> = ThunkAction<T, {}, null, Action<string>>;

export type AppDispatch = ThunkDispatch<{}, null, Action>;
