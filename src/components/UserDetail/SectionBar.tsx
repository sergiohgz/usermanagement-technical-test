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
import { ArrowBack, Delete, Edit, Check, Cancel } from '@material-ui/icons';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import routes from '../../config/routes';

const BackLink = styled(Link)<{}, Theme>(({ theme }) => ({
    marginRight: theme.spacing(1),
}));

interface SectionBarProps {
    firstName?: string;
    lastName?: string;
    isEditMode: boolean;
    toggleEditMode: (activate?: boolean) => void;
    onEditUser: (confirm: boolean) => void;
    onRemoveUser: () => void;
}

const SectionBar: FC<SectionBarProps> = ({
    firstName = '',
    lastName = '',
    isEditMode,
    toggleEditMode,
    onEditUser,
    onRemoveUser,
}) => (
    <AppBar position="sticky" color={!isEditMode ? 'primary' : 'secondary'}>
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
                    {isEditMode && <span>Editando </span>}
                    {firstName} {lastName}
                </Typography>
            </Grid>
            <Grid item>
                {!isEditMode ? (
                    <>
                        <Hidden xsDown>
                            <Button
                                onClick={() => toggleEditMode(true)}
                                color="inherit"
                                startIcon={<Edit />}
                            >
                                Editar
                            </Button>
                            <Button
                                onClick={() => onRemoveUser()}
                                color="inherit"
                                startIcon={<Delete />}
                            >
                                Eliminar
                            </Button>
                        </Hidden>
                        <Hidden smUp>
                            <IconButton
                                onClick={() => toggleEditMode(true)}
                                color="inherit"
                            >
                                <Edit />
                            </IconButton>
                            <IconButton
                                onClick={() => onRemoveUser()}
                                color="inherit"
                            >
                                <Delete />
                            </IconButton>
                        </Hidden>
                    </>
                ) : (
                    <>
                        <Hidden xsDown>
                            <Button
                                onClick={() => onEditUser(false)}
                                color="inherit"
                                startIcon={<Cancel />}
                            >
                                Cancelar
                            </Button>
                            <Button
                                onClick={() => onEditUser(true)}
                                color="inherit"
                                startIcon={<Check />}
                            >
                                Confirmar
                            </Button>
                        </Hidden>
                        <Hidden smUp>
                            <IconButton
                                onClick={() => onEditUser(false)}
                                color="inherit"
                            >
                                <Cancel />
                            </IconButton>
                            <IconButton
                                onClick={() => onEditUser(true)}
                                color="inherit"
                            >
                                <Check />
                            </IconButton>
                        </Hidden>
                    </>
                )}
            </Grid>
        </Toolbar>
    </AppBar>
);

export default SectionBar;
