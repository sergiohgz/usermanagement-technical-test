import { UserData } from '../detail/types';

export type UserEditionData = Omit<UserData, 'id'>;
