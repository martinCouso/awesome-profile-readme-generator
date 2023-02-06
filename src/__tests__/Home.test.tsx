import Home from '../pages'
import { render, screen } from '@testing-library/react'

describe('Home', () => {
  it('should display the title', () => {
    const { container } = render(<Home />)
    expect(container).toHaveTextContent('Awesome Profile README Generator')
  })

  it('should render Profile Information Form', () => {
    render(<Home />)
    expect(screen.getByRole('form')).toBeInTheDocument()
  })

  it('should render Submit Button', () => {
    render(<Home />)
    expect(screen.getByTestId('submit-profile-button')).toBeInTheDocument()
  })
})
