import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import AddTask from './components/AddTask';

const mockAddTask = jest.fn();

describe('AddTask Component', () => {
  it('should render correctly', () => {
    render(<AddTask addTask={mockAddTask} />);
    const inputElement = screen.getByPlaceholderText('Enter a title for this task…');
    const selectElement = screen.getByText('Select Category');
    const addButton = screen.getByText('add');

    expect(inputElement).toBeInTheDocument();
    expect(selectElement).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  it('should update input value and category selection', () => {
    render(<AddTask addTask={mockAddTask} />);
    const inputElement = screen.getByPlaceholderText('Enter a title for this task…')  as HTMLInputElement;
    const selectElement = screen.getByText('Select Category') as HTMLSelectElement;

    fireEvent.change(inputElement, { target: { value: 'New Task' } });
    fireEvent.select(selectElement, { target: { value: 'movies' } }) ;
    expect(inputElement.value).toBe('New Task');
    expect(selectElement.value).toBe('movies');
  });


  it('should not call addTask if input or category is empty', () => {
    render(<AddTask addTask={mockAddTask} />);
    const submitButton = screen.getByText('add');

    fireEvent.click(submitButton);

    expect(mockAddTask).not.toHaveBeenCalled();
  });
});
