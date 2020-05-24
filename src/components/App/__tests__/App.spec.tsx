import { render } from '@testing-library/react';
import React from 'react';

import App from '../App';
import Providers from '../../../config/Providers';

describe('App component', () => {
    it('should render title', () => {
        const title = 'App';
        const { getByText } = render(<App />, {
            wrapper: Providers,
        });
        expect(getByText(title)).toBeInTheDocument();
    });
});
