import { render, screen } from "@testing-library/react"
import InfoOverlay from "./InfoOverlay"
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event"

describe('InfoOverlay', () => {
  it('Changes class list based on visibility', () => {
    render(<>
      <InfoOverlay
        visible
        onClose={() => {}}
      />
      <InfoOverlay
        visible={false}
        onClose={() => {}}
      />
    </>)

    const dialogs = screen.getAllByRole('dialog')
    expect(dialogs.length).toBe(2)
    expect(dialogs[0].classList).not.toStrictEqual(dialogs[1].classList)
  })
  
  it('Renders children', () => {
    render(<>
      <InfoOverlay
        visible
        onClose={() => {}}
      >
        <p>Hello there</p>
      </InfoOverlay>
    </>)

    const text = screen.getByText('Hello there')
    expect(text).toBeInTheDocument()
  })
  
  it('Calls onClose prop', async () => {
    const fn = jest.fn()
    const user = userEvent.setup()
    
    render(<>
      <InfoOverlay
        visible
        onClose={fn}
      >
        <p>Hello there</p>
      </InfoOverlay>
    </>)

    const dialog = screen.getByRole('dialog')
    await user.click(dialog)

    expect(fn).toHaveBeenCalled()
  })
  
  it('Doesn\'t call onClose prop if child clicked', async () => {
    const fn = jest.fn()
    const user = userEvent.setup()
    
    render(<>
      <InfoOverlay
        visible
        onClose={fn}
      >
        <p>Hello there</p>
      </InfoOverlay>
    </>)

    // const dialog = screen.getByRole('dialog')
    // await user.click(dialog)

    const text = screen.getByText('Hello there')
    await user.click(text)

    expect(fn).not.toHaveBeenCalled()
  })
})