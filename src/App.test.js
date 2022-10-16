import {  fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import React from 'react'

test('renders without crashing', () => {
  const { getByText } = render(<App />);
  const title = getByText(/Ultima Búsqueda/i);
  expect(title).toBeInTheDocument();
});

test('search form could be used', async () => {
  render(<App />)
  const input = await screen.findByRole('textbox')
  const button = await screen.findByRole('button')

  fireEvent.change(input, { target: { value: 'asta' }})
  fireEvent.click(button)

  const title = await screen.findByText('asta')
  expect(title).toBeVisible()
})