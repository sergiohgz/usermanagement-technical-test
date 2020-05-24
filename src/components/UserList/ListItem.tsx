import styled from '@emotion/styled';
import {
    Button,
    Card,
    CardActions,
    CardHeader,
    Theme,
} from '@material-ui/core';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { UsersItemData } from '../../store/users/types';

const UserCard = styled(Card)<{}, Theme>(({ theme }) => ({
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

const ActionsContainer = styled(CardActions)<{}, Theme>(({ theme }) => ({
    padding: theme.spacing(2),
}));

type ListItemProps = UsersItemData;

const ListItem: FC<ListItemProps> = ({ id, firstName, lastName }) => (
    <UserCard>
        <CardHeader
            title={`${firstName} ${lastName}`}
            titleTypographyProps={{ variant: 'h6' }}
        />
        <ActionsContainer>
            <Button
                component={Link}
                to={`/users/${id}`}
                color="secondary"
                variant="contained"
            >
                Ir a detalle
            </Button>
        </ActionsContainer>
    </UserCard>
);

export default ListItem;
