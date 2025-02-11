import { render, screen } from '@testing-library/react';
import Categories from './components/Categories';
import { Category } from '@/sanity.types';

jest.mock('./components/categoryselect', () => () => <div>CategorySelect</div>);

const mockCategories: Category[] = [{ _id: '1', title: 'Test Category' }];

describe('Categories', () => {
  it('renders category select component', () => {
    render(<Categories categories={mockCategories} />);
    expect(screen.getByText('CategorySelect')).toBeInTheDocument();
  });
});