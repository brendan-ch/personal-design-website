import { render, screen } from "@testing-library/react"
import Anchor from "./Anchor"
import '@testing-library/jest-dom'

describe('Anchor', () => {
  it('Renders given text', () => {
    render(<Anchor
      text="Hello there"
    />)

    const text = screen.getByText('Hello there')
    expect(text).toBeInTheDocument()
  })

  it('Renders different class list based on hideBorder prop', () => {
    render(<>
      <Anchor
        text="Hello there"
      />
      <Anchor
        text="Hello there"
        hideBorder
      />
    </>)

    const anchors = screen.getAllByRole('heading')
    expect(anchors.length).toBe(2)
    expect(anchors[0].classList).not.toStrictEqual(anchors[1].classList)
  })
})