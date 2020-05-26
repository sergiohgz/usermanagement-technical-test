import { Grid, IconButton, TextField } from '@material-ui/core';
import { Clear, Done } from '@material-ui/icons';
import React, { FC, useState } from 'react';

interface EditableTextFieldProps {
    name: string;
    label?: string;
    value?: string;
    updateFn: (name: string, newValue?: string) => void;
}

const EditableTextField: FC<EditableTextFieldProps> = ({
    name,
    label,
    value,
    updateFn,
}) => {
    const [updatedValue, setUpdatedValue] = useState(value);
    const [showControl, toggleShowControl] = useState(false);
    const handleUpdateValue = (done: boolean): void => {
        if (done) {
            updateFn(name, updatedValue);
        } else {
            setUpdatedValue(value);
        }
        toggleShowControl(false);
    };
    return (
        <Grid container alignItems="center">
            <Grid item>
                <TextField
                    label={label}
                    name={name}
                    value={updatedValue}
                    onFocus={() => toggleShowControl(true)}
                    onChange={newValue =>
                        setUpdatedValue(newValue.currentTarget.value)
                    }
                />
            </Grid>
            {showControl && (
                <Grid item>
                    <IconButton onClick={() => handleUpdateValue(true)}>
                        <Done />
                    </IconButton>
                    <IconButton onClick={() => handleUpdateValue(false)}>
                        <Clear />
                    </IconButton>
                </Grid>
            )}
        </Grid>
    );
};

export default EditableTextField;
