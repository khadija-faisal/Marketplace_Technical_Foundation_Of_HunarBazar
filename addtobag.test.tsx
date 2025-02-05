import { render, screen } from '@testing-library/react'
import AddtoBag from './components/addtobag'

describe('AddtoBag', () => {
    it('renders a button', () => {
      const mockProduct = {
        _id: '123',
        name: 'Test Product',
        price: 100,
        stock: 10,
        slug: { current: 'test-product' }
      }
  
      render(<AddtoBag product={mockProduct} />)
      
      const button = screen.getByRole('button', { name: /ADD TO BAG/i })
      expect(button).toBeInTheDocument()
    })
})