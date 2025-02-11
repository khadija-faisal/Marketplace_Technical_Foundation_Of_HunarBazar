import { render, screen } from '@testing-library/react';
import ProductList from "./components/productlist";
import { Products, Category } from './sanity.types';

jest.mock('./components/Categories', () => () => <div>Categories</div>);
jest.mock('./components/productcard', () => ({ product }: { product: Products }) => (
  <div data-testid="product-card">{product.product}</div>
));

const mockProducts: Products[] = [
  { _id: '1', product: 'Product 1' },
  { _id: '2', product: 'Product 2' }
];

const mockCategories: Category[] = [{ _id: '1', title: 'Category 1' }];

describe('ProductList', () => {
  it('renders correct number of product cards', () => {
    const { getAllByTestId } = render(
      <ProductList products={mockProducts} categories={mockCategories} />
    );
    
    expect(getAllByTestId('product-card').length).toBe(2);
  });
 
  it('renders categories component', () => {
    render(<ProductList products={[]} categories={mockCategories} />);
    expect(screen.getByText('Categories')).toBeInTheDocument();
  });
});