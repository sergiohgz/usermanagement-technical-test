import styled from '@emotion/styled';
import {
    Button,
    Card as MuiCard,
    CardActions,
    CardContent,
    CardHeader,
    Grid,
    TextField as MuiTextField,
    Theme,
} from '@material-ui/core';
import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import routes from '../../config/routes';
import { doLogin } from '../../store/login';
import { LoginForm } from '../../store/login/types';
import { AppDispatch } from '../../store/types';

const LoginGrid = styled(Grid)({
    height: '100vh',
});

const Card = styled(MuiCard)<{}, Theme>(({ theme }) => ({
    [theme.breakpoints.up('sm')]: {
        width: theme.breakpoints.width('sm'),
    },
    padding: theme.spacing(4),
    width: '300px',
}));

const TextField = styled(MuiTextField)<{}, Theme>(({ theme }) => ({
    margin: theme.spacing(1, 'auto'),
}));

const Login: FC = () => {
    const history = useHistory();
    const dispatch = useDispatch<AppDispatch>();
    const [loginForm, setLoginForm] = useState<LoginForm>({
        email: '',
        password: '',
    });

    const handleChangeField = (name: string, value: string): void => {
        setLoginForm(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const submitLogin = (): void => {
        dispatch(doLogin(loginForm)).then(() => {
            history.push(routes.app);
        });
    };

    return (
        <LoginGrid container justify="center" alignItems="center">
            <Grid item>
                <Card>
                    <CardHeader
                        title="User Management"
                        titleTypographyProps={{
                            align: 'center',
                            gutterBottom: true,
                        }}
                        subheader="Login"
                        subheaderTypographyProps={{
                            align: 'center',
                            variant: 'h6',
                            color: 'inherit',
                        }}
                    />
                    <CardContent>
                        <form autoComplete="off" noValidate>
                            <Grid
                                container
                                direction="column"
                                alignItems="center"
                                spacing={2}
                            >
                                <TextField
                                    label="Usuario (dirección email)"
                                    name="email"
                                    type="email"
                                    onChange={event =>
                                        handleChangeField(
                                            'email',
                                            event.target.value
                                        )
                                    }
                                    value={loginForm.email}
                                    fullWidth
                                    required
                                />
                                <TextField
                                    label="Contraseña"
                                    name="password"
                                    type="password"
                                    onChange={event =>
                                        handleChangeField(
                                            'password',
                                            event.target.value
                                        )
                                    }
                                    value={loginForm.password}
                                    fullWidth
                                    required
                                />
                            </Grid>
                        </form>
                    </CardContent>
                    <CardActions>
                        <Grid container justify="flex-end">
                            <Button
                                color="primary"
                                variant="contained"
                                onClick={() => submitLogin()}
                                disabled={
                                    !loginForm.email || !loginForm.password
                                }
                            >
                                Login
                            </Button>
                        </Grid>
                    </CardActions>
                </Card>
            </Grid>
        </LoginGrid>
    );
};

export default Login;
