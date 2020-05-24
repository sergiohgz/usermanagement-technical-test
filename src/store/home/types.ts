import { AsyncState } from '../types';

export interface HomeData {
    message: string;
}

export type HomeState = AsyncState<HomeData>;
