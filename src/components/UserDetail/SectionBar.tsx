import styled from '@emotion/styled';
import {
    AppBar,
    Grid,
    IconButton,
    Theme,
    Toolbar,
    Typography,
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import routes from '../../config/routes';

const BackLink = styled(Link)<{}, Theme>(({ theme }) => ({
    marginRight: theme.spacing(1),
}));

interface SectionBarProps {
    firstName?: string;
    lastName?: string;
}

const SectionBar: FC<SectionBarProps> = ({ firstName = '', lastName = '' }) => (
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
        </Toolbar>
    </AppBar>
);

export default SectionBar;
