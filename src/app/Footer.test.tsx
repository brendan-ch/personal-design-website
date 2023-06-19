import { render, screen } from "@testing-library/react"
import Footer from "./Footer"
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event"

describe('Footer', () => {
  it('Renders expected text according to requirements', () => {
    render(<Footer
      onNoteOpen={() => {}}
    />)

    const privacyPolicy = screen.getByText('Privacy Policy')
    expect(privacyPolicy).toBeInTheDocument()

    const fairUse = screen.getByText('Fair Use Notice')
    expect(fairUse).toBeInTheDocument()
  })
  
  it('Calls onNoteOpen', async () => {
    const fn = jest.fn()
    const user = userEvent.setup()
    
    render(<Footer
      onNoteOpen={fn}
    />)

    const noteText = screen.getByText('A note from Brendan')
    await user.click(noteText)

    expect(fn).toHaveBeenCalled()
  })
})