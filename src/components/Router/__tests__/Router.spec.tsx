import { render } from '@testing-library/react';
import React from 'react';

import Router from '../Router';
import Providers from '../../../config/Providers';

describe('App component', () => {
    it('should render title', () => {
        const title = 'App';
        const { getByText } = render(<Router />, {
            wrapper: Providers,
        });
        expect(getByText(title)).toBeInTheDocument();
    });
});
