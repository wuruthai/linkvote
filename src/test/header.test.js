import { render, screen } from '@testing-library/react';
import { Header } from 'partials';
import React from 'react';

test('render <Header /> component', () => {
  render(<Header />);
  const linkElement = screen.getByText(/VOTE/i);
  expect(linkElement).toBeInTheDocument();
});
