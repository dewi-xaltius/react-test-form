import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InputForm from './InputForm';

test('renders the input form', () => {
  render(<InputForm onSubmit={() => {}} />);

  // Check if input field and button are in the document
  const inputField = screen.getByLabelText(/Enter Text:/i);
  const submitButton = screen.getByText(/Submit/i);

  expect(inputField).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('allows the user to input text', () => {
  render(<InputForm onSubmit={() => {}} />);

  const inputField = screen.getByLabelText(/Enter Text:/i);

  // Simulate typing into the input field
  fireEvent.change(inputField, { target: { value: 'Hello World' } });

  // Check if the input field contains the typed value
  expect(inputField.value).toBe('Hello World');
});

test('calls onSubmit when the form is submitted', () => {
  const mockOnSubmit = jest.fn();
  render(<InputForm onSubmit={mockOnSubmit} />);

  const inputField = screen.getByLabelText(/Enter Text:/i);
  const submitButton = screen.getByText(/Submit/i);

  // Simulate typing into the input field
  fireEvent.change(inputField, { target: { value: 'Hello World' } });

  // Simulate form submission
  fireEvent.click(submitButton);

  // Check if the onSubmit handler was called with the correct value
  expect(mockOnSubmit).toHaveBeenCalledWith('Hello World');
  
  // Check if the input field is cleared after submission
  expect(inputField.value).toBe('');
});
