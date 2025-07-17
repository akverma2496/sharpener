import { render, screen } from '@testing-library/react'
import App from './App'

test('renders the app', () => {
  //Arrange - test data & environment

  render(<App />)  // renders the entire component tree (whichever components inside App) not the specific component

  //Act - useEvents

  //Assert the results
  expect(screen.getByText(/hmr/i)).toBeInTheDocument()
})
