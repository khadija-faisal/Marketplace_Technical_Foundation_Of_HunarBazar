import { render, screen } from '@testing-library/react'
import ProductQuantityButton from './components/productquantity'

describe('ProductQuantityButton', () => {
  const mockProduct = {
    _id: '123',
    name: 'Test Product',
    price: 100,
    stock: 10,
    slug: { current: 'test-product' }
  }

  it('renders quantity controls', () => {
    render(<ProductQuantityButton product={mockProduct} />)
    
    const decreaseButton = screen.getByRole('button', { name: /decrease/i })
    const increaseButton = screen.getByRole('button', { name: /increase/i })
    const quantityDisplay = screen.getByText('0')

    expect(decreaseButton).toBeInTheDocument()
    expect(increaseButton).toBeInTheDocument()
    expect(quantityDisplay).toBeInTheDocument()
  })
})