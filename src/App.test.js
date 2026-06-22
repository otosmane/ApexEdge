// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ApexEdge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ApexEdge/i);
    expect(titleElement).toBeInTheDocument();
});
