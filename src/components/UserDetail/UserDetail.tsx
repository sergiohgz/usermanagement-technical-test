import styled from '@emotion/styled';
import { Theme, Typography } from '@material-ui/core';
import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import routes from '../../config/routes';
import { AppState } from '../../store/store';
import { AppDispatch } from '../../store/types';
import { getUser, resetUser } from '../../store/user/detail';
import { editUser } from '../../store/user/edition';
import { UserEditionData } from '../../store/user/edition/types';
import { removeUser } from '../../store/user/remove';
import Loading from '../common/Loading';
import InfoEdition from './InfoEdition';
import SectionBar from './SectionBar';
import UserInfo from './UserInfo';

const DataContainer = styled('div')<{}, Theme>(({ theme }) => ({
    padding: theme.spacing(2),
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
        width: '85%',
    },
}));

interface UserParams {
    userId: string;
}

const User: FC = () => {
    const { userId } = useParams<UserParams>();
    const history = useHistory();
    const dispatch = useDispatch<AppDispatch>();
    const { asyncLoading, asyncData } = useSelector(
        (appState: AppState) => appState.user.detail
    );
    const [isEditMode, setEditMode] = useState(false);
    const [editionData, setEditionData] = useState<
        UserEditionData | undefined
    >();

    useEffect(() => {
        dispatch(getUser(userId));
        return () => {
            dispatch(resetUser());
        };
    }, [dispatch, userId]);

    const toggleEditMode = (activate = false): void => {
        if (activate) {
            setEditionData(asyncData);
        }
        setEditMode(activate);
    };

    const handleEditField = (newData: UserEditionData): void => {
        setEditionData(newData);
    };

    const handleEdition = (confirm: boolean): void => {
        if (confirm && !!editionData) {
            dispatch(editUser(userId, editionData)).then(() => {
                toggleEditMode();
                dispatch(getUser(userId));
            });
        } else {
            setEditionData(undefined);
            toggleEditMode();
        }
    };

    const handleRemoveUser = (): void => {
        dispatch(removeUser(userId)).then(() => {
            history.push(routes.users);
        });
    };

    return (
        <>
            <SectionBar
                firstName={asyncData?.firstName}
                lastName={asyncData?.lastName}
                isEditMode={isEditMode}
                toggleEditMode={toggleEditMode}
                onEditUser={handleEdition}
                onRemoveUser={handleRemoveUser}
            />
            {asyncLoading && <Loading />}
            <DataContainer>
                {asyncData ? (
                    <>
                        {!isEditMode ? (
                            <UserInfo
                                firstName={asyncData.firstName}
                                lastName={asyncData.lastName}
                                email={asyncData.email}
                            />
                        ) : (
                            <InfoEdition
                                firstName={editionData?.firstName ?? ''}
                                lastName={editionData?.lastName ?? ''}
                                email={editionData?.email ?? ''}
                                onUpdateField={handleEditField}
                            />
                        )}
                    </>
                ) : (
                    <Typography variant="h5">Usuario no encontrado</Typography>
                )}
            </DataContainer>
        </>
    );
};

export default User;
