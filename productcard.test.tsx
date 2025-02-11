import { render, screen } from '@testing-library/react';
import ProductCard from '@/components/productcard';
import { Products } from '@/sanity.types';

// Ensure mock products have all required fields
const mockProduct: Products = {
  _id: '1',
  product: 'Test Product',
  price: 100,
  discount: 20,
  stock: 5,
  status: 'NEW',
  productImage: { 
    asset: { 
      _ref: 'image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg',
      _type: 'reference',

    } 
  }
};


describe('ProductCard', () => {
  it('renders product details correctly', () => {
    render(<ProductCard product={mockProduct} />);
    
    // Check for product name
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.queryByText('Out of Stock')).not.toBeInTheDocument();
  });

  it('renders image with correct attributes', () => {
    render(<ProductCard product={mockProduct} />);
    const image = screen.getByRole('img', { name: /productImage/i });
    expect(image).toHaveAttribute('src', expect.stringContaining('Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000'));
    expect(image).toHaveAttribute('loading', 'lazy');
  }); 

  it('renders price view component', () => {
    render(<ProductCard product={mockProduct} />);
    expect(screen.getByTestId('price-view')).toBeInTheDocument();
  });
});