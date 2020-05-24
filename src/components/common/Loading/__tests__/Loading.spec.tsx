import { render } from '@testing-library/react';
import React from 'react';

import Loading from '../Loading';

describe('Loading component', () => {
    it('should render loading', () => {
        const { getByRole } = render(<Loading />);
        expect(getByRole('progressbar')).toBeInTheDocument();
    });
});
