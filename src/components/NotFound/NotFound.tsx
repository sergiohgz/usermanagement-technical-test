import styled from '@emotion/styled';
import { Button, Theme, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

import routes from '../../config/routes';

const NotFoundContainer = styled('div')<{}, Theme>(({ theme }) => ({
    padding: theme.spacing(3),
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
        width: '85%',
    },
}));

const NotFound: FC = () => {
    const history = useHistory();
    return (
        <NotFoundContainer>
            <Typography variant="h5" gutterBottom>
                Page not found
            </Typography>
            <Button
                color="secondary"
                variant="contained"
                onClick={() => history.push(routes.home)}
            >
                Return to home
            </Button>
        </NotFoundContainer>
    );
};

export default NotFound;
