import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import App from './App'

const setup = () => {
  const utils = render(<App />)
  return utils
}

describe("App", () => {
  it("should show the initial value", () => {
    const { getByTestId } = setup()

    expect(getByTestId("counter")).toBeInTheDocument()
  })

  it("should show the initial value", () => {
    const { getByText, getByTestId } = setup()

    fireEvent.click(getByText("+"))
    expect(getByTestId("counter")).toHaveTextContent("1")
  })

  it("should show the initial value", () => {
    const { getByText, getByTestId } = setup()

    fireEvent.click(getByText("-"))
    expect(getByTestId("counter")).toHaveTextContent(/^-1$/)
  })
})
