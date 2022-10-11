import { render } from '@testing-library/react';
import App from './App';
import React from 'react'

test('renders without crashing', () => {
  const { getByText } = render(<App />);
  const tittle = getByText(/Ultima Búsqueda/i);
  expect(tittle).toBeInTheDocument();
});
