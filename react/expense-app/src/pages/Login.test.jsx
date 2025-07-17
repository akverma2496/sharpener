import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../store/auth-slice'
import Login from './Login'

const renderWithProviders = () => {
  const store = configureStore({ reducer: { auth: authReducer } })

  render(
    <Provider store={store}>
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    </Provider>
  )
}

describe('Login Component', () => {

  test('calls fetch with correct email on "Forgot Password?" click', async () => {
    renderWithProviders()

    // Fill the email input
    const emailInput = screen.getByPlaceholderText(/enter email/i)
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })

    // Mock global fetch
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      })
    )

    const forgotLink = screen.getByText(/forgot password\?/i)
    fireEvent.click(forgotLink)

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('sendOobCode'),
        expect.objectContaining({
          method: 'POST',
          body: JSON.stringify({
            requestType: 'PASSWORD_RESET',
            email: 'test@example.com',
          }),
        })
      )
    })

    global.fetch.mockRestore()
  })

  test('password input should be of type password', () => {
    renderWithProviders()
    const passwordInput = screen.getByPlaceholderText(/enter password/i)
    expect(passwordInput).toHaveAttribute('type', 'password')
  })
})
