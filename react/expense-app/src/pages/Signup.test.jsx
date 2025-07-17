import { render, screen, fireEvent } from '@testing-library/react'
import Signup from './Signup'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../store/auth-slice'

describe('Signup Component', () => {
  const setup = () => {
    const store = configureStore({ reducer: { auth: authReducer } })
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Signup />
        </MemoryRouter>
      </Provider>
    )
  }

  test('renders "Create Account" heading', () => {
    setup()
    const linkElement = screen.getByText(/create account/i)
    expect(linkElement).toBeInTheDocument()
  })

  test('updates email input value on user typing', () => {
    setup()

    const emailInput = screen.getByPlaceholderText(/enter email/i)
    expect(emailInput).toBeInTheDocument()

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    expect(emailInput.value).toBe('test@example.com')
  })
})
