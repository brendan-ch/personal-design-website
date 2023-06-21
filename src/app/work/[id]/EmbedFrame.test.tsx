import { render, screen, waitFor } from "@testing-library/react"
import EmbedFrame from "./EmbedFrame"
import userEvent from "@testing-library/user-event"

describe('EmbedFrame', () => {
  it('Renders iframe when button clicked', async () => {
    const user = userEvent.setup()

    render(
      <EmbedFrame
        src="https://example.com/"
        loadButtonText="Load example"
        backgroundImageSrc="https://images.unsplash.com/photo-1604890532358-4029426b27af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3474&q=80"
        backgroundImageAlt="capybara"
      />
    )

    const buttonText = screen.getByText('Load example')
    await user.click(buttonText)

    const iframe: HTMLIFrameElement = screen.getByRole('presentation')
    expect(iframe.src).toStrictEqual('https://example.com/')
  })
})