import { render, waitFor } from '@testing-library/react';
import React from 'react';
import * as ReactRedux from 'react-redux';

import Home from '../Home';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
    useDispatch: jest.fn().mockReturnValue(jest.fn()),
}));

describe('Home stage', () => {
    const useSelectorSpy = jest.spyOn(ReactRedux, 'useSelector');
    it('should render loading', () => {
        useSelectorSpy.mockReturnValueOnce({ asyncLoading: true });
        const { getByRole } = render(<Home />);
        const loading = getByRole('progressbar');
        waitFor(() => {
            expect(loading).toBeInTheDocument();
        });
    });
    it('should render message', () => {
        const message = 'test message';
        useSelectorSpy.mockReturnValueOnce({ asyncLoading: false, message });
        const { getByText } = render(<Home />);
        waitFor(() => {
            expect(getByText(message)).toBeInTheDocument();
        });
    });
    it('should render a fallback when there is no data', () => {
        const noData = 'No data found';
        useSelectorSpy.mockReturnValueOnce({ asyncLoading: false });
        const { getByText } = render(<Home />);
        waitFor(() => {
            expect(getByText(noData)).toBeInTheDocument();
        });
    });
});
