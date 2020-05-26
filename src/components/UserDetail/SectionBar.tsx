import styled from '@emotion/styled';
import {
    AppBar,
    Button,
    Grid,
    IconButton,
    Theme,
    Toolbar,
    Typography,
    Hidden,
} from '@material-ui/core';
import { ArrowBack, Delete } from '@material-ui/icons';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import routes from '../../config/routes';

const BackLink = styled(Link)<{}, Theme>(({ theme }) => ({
    marginRight: theme.spacing(1),
}));

interface SectionBarProps {
    firstName?: string;
    lastName?: string;
    onRemoveUser: () => void;
}

const SectionBar: FC<SectionBarProps> = ({
    firstName = '',
    lastName = '',
    onRemoveUser,
}) => (
    <AppBar position="sticky">
        <Toolbar
            component={Grid}
            container
            justify="space-between"
            alignItems="center"
        >
            <Grid item>
                <IconButton
                    component={BackLink}
                    to={routes.users}
                    color="inherit"
                >
                    <ArrowBack />
                </IconButton>
                <Typography variant="body1" component="span">
                    {firstName} {lastName}
                </Typography>
            </Grid>
            <Grid item>
                <Hidden smDown>
                    <Button onClick={() => onRemoveUser()} color="inherit">
                        <Delete /> Eliminar
                    </Button>
                </Hidden>
                <Hidden mdUp>
                    <IconButton onClick={() => onRemoveUser()} color="inherit">
                        <Delete />
                    </IconButton>
                </Hidden>
            </Grid>
        </Toolbar>
    </AppBar>
);

export default SectionBar;
