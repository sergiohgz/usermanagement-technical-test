import styled from '@emotion/styled';
import { Theme, Typography } from '@material-ui/core';
import React, { FC } from 'react';

const Label = styled('div')<{}, Theme>(({ theme }) => ({
    color: theme.palette.grey[700],
}));

interface FieldProps {
    label: string;
    value?: string;
}

const Field: FC<FieldProps> = ({ label, value = '-' }) => (
    <div>
        <Typography component={Label} variant="body2">
            {label}
        </Typography>
        <Typography component="div" variant="body2">
            {value}
        </Typography>
    </div>
);

export default Field;
