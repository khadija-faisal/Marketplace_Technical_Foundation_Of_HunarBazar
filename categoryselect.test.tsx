import { render, screen, fireEvent, waitFor } from '@testing-library/react';

// Mock scrollIntoView
window.HTMLElement.prototype.scrollIntoView = function() {};

// Mock ResizeObserver
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};
import CategorySelect from './components/categoryselect';
import { Category } from '@/sanity.types';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(() => ({ push: jest.fn() }))
}));

const mockCategories: Category[] = [
  { _id: '1', title: 'HandmadeBage', slug: { _type: 'slug', current: 'handmadebage' } },
  { _id: '2', title: 'Flowers', slug: { _type: 'slug', current: 'flowers' } }
];

describe('CategorySelect', () => {
  it('opens popover on trigger click', async () => {
    render(<CategorySelect categories={mockCategories} />);
    
    // Click the button to open popover
    fireEvent.click(screen.getByRole('button'));
    
    // Wait for the input to be visible
    await waitFor(() => {
      const searchInput = screen.getByPlaceholderText('Search Category...');
      expect(searchInput).toBeInTheDocument();
    });
  });

  it('filters categories on search', async () => {
    render(<CategorySelect categories={mockCategories} />);
    fireEvent.click(screen.getByRole('button'));
    const input = screen.getByPlaceholderText('Search Category...');
    fireEvent.change(input, { target: { value: 'Hand' } });
    expect(screen.getByText('HandmadeBage')).toBeInTheDocument();
    expect(screen.queryByText('Flowers')).not.toBeInTheDocument();
  }); 

  it('navigates on category selection', async () => {
    const mockPush = jest.fn();
    (useRouter as jest.Mock).mockImplementation(() => ({ push: mockPush }));
    
    render(<CategorySelect categories={mockCategories} />);
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByText('HandmadeBage'));
    
    expect(mockPush).toHaveBeenCalledWith('/categories/handmadebage');
  });
});