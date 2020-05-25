import styled from '@emotion/styled';
import { Card, CardContent, CardHeader, Grid, Theme } from '@material-ui/core';
import React, { FC } from 'react';

import { UserData } from '../../store/user/detail/types';
import Field from '../common/Field';

const UserCard = styled(Card)<{}, Theme>(({ theme }) => ({
    margin: theme.spacing(3),
}));

type UserInfoProps = Omit<UserData, 'id'>;

const UserInfo: FC<UserInfoProps> = ({ firstName, lastName, email }) => (
    <UserCard>
        <CardHeader
            title="Datos de usuario"
            titleTypographyProps={{ variant: 'h6' }}
        />
        <CardContent>
            <Grid
                container
                justify="space-between"
                alignItems="center"
                spacing={4}
            >
                <Grid item xs={12} sm={4}>
                    <Field label="Primer nombre" value={firstName} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field label="Segundo nombre" value={lastName} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Field label="Email" value={email} />
                </Grid>
            </Grid>
        </CardContent>
    </UserCard>
);

export default UserInfo;
