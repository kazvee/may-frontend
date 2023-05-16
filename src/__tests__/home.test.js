import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from '../pages/index';

jest.mock('next/router', () => require('next-router-mock'));

describe('Home page', () => {
  it('renders a heading', () => {
    render(<Home name='My Name' />);

    const heading = screen.getByRole('heading', {
      name: 'My Name',
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders a summary with the portfolio owner summary', () => {
    render(<Home summary='My Summary' />);

    const summary = screen.getByText('My Summary');

    expect(summary).toBeInTheDocument();
  });
});
