import React from 'react';  
import { render, screen } from '@testing-library/react';  
import App from './App';  

test('renders profile component', () => {  
  render(<App />);  
  const profileElement = screen.getByText(/posts/i);  
  expect(profileElement).toBeInTheDocument();  
});