import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import GamePage from './GamePage';

test('handles incorrect guesses and reduces tries', () => {
    render(<GamePage runTimer={true} setRunTimer={() => { }} />);

    // Simulate entering an incorrect letter
    fireEvent.change(screen.getByPlaceholderText('Type your guess'), { target: { value: 'X' } });
    fireEvent.click(screen.getByText('Confirm'));

    // Expect the tries to be decremented
    expect(screen.getByText(/tries left to guess/i)).toHaveTextContent('2');
});
