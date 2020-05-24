import { render } from '@testing-library/react';
import React from 'react';

import Providers from '../../../config/Providers';
import NotFound from '../NotFound';

describe('NotFound component', () => {
    it('should render a not found message', () => {
        const message = 'Page not found';
        const { getByText } = render(<NotFound />, { wrapper: Providers });
        expect(getByText(message)).toBeInTheDocument();
    });
});
