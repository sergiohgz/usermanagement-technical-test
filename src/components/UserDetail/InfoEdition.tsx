import styled from '@emotion/styled';
import { Card, CardContent, CardHeader, Grid, Theme } from '@material-ui/core';
import React, { FC } from 'react';

import { UserEditionData } from '../../store/user/edition/types';
import EditableTextField from '../common/EditableTextField';

const UserCard = styled(Card)<{}, Theme>(({ theme }) => ({
    margin: theme.spacing(3),
}));

type InfoEditionProps = UserEditionData & {
    onUpdateField: (newData: UserEditionData) => void;
};

const InfoEdition: FC<InfoEditionProps> = ({
    firstName,
    lastName,
    email,
    onUpdateField,
}) => {
    const handleUpdateField = (name: string, value?: string): void => {
        if (value) {
            onUpdateField({
                firstName,
                lastName,
                email,
                [name]: value,
            });
        }
    };

    return (
        <UserCard>
            <CardHeader
                title="Edición de datos de usuario"
                titleTypographyProps={{ variant: 'h6' }}
            />
            <CardContent>
                <Grid
                    container
                    justify="space-between"
                    alignItems="center"
                    spacing={2}
                >
                    <Grid item xs={12} md={4}>
                        <EditableTextField
                            label="Primer Nombre"
                            name="firstName"
                            value={firstName}
                            updateFn={handleUpdateField}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <EditableTextField
                            label="Segundo Nombre"
                            name="lastName"
                            value={lastName}
                            updateFn={handleUpdateField}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <EditableTextField
                            label="Email"
                            name="email"
                            value={email}
                            updateFn={handleUpdateField}
                        />
                    </Grid>
                </Grid>
            </CardContent>
        </UserCard>
    );
};

export default InfoEdition;
