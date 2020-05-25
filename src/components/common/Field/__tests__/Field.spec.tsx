import { render, waitFor } from '@testing-library/react';
import React from 'react';

import Providers from '../../../../config/Providers';
import Field from '../Field';

describe('Field component', () => {
    it('should render a field with value provided', () => {
        const label = 'test label';
        const value = 'test value';
        const { getByText } = render(<Field label={label} value={value} />, {
            wrapper: Providers,
        });

        const labelDisplay = getByText(label);
        const valueDisplay = getByText(value);
        waitFor(() => {
            expect(labelDisplay).toBeInTheDocument();
            expect(valueDisplay).toBeInTheDocument();
        });
    });
    it('should render a field with fallback value', () => {
        const label = 'test label';
        const { getByText } = render(<Field label={label} />, {
            wrapper: Providers,
        });

        const labelDisplay = getByText(label);
        const fallbackValueDisplay = getByText('-');
        waitFor(() => {
            expect(labelDisplay).toBeInTheDocument();
            expect(fallbackValueDisplay).toBeInTheDocument();
        });
    });
});
