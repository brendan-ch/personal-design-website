import { render, screen, waitFor } from "@testing-library/react"
import MobileNavigationBar from "./MobileNavigationBar"
import userEvent from '@testing-library/user-event'

describe('MobileNavigationBar', () => {
  it('Applies custom styling', () => {
    render(<MobileNavigationBar
      style={{
        display: 'block',
        opacity: 42
      }}
    />)

    const nav = screen.getByRole('navigation')

    expect(nav.style).toBeTruthy()
    expect(nav.style.display).toStrictEqual('block')
    expect(nav.style.opacity).toStrictEqual("42")
  })

  it('Opens mobile navigation menu if hamburger pressed', async () => {
    const user = userEvent.setup()

    render(<>
      <MobileNavigationBar />
      <MobileNavigationBar />
    </>)
    screen.debug()

    // Select the hamburger button
    const hamburgers = screen.getAllByTitle('Hamburger')
    expect(hamburgers.length).toBe(2)
    await user.click(hamburgers[0])

    // waitFor(() => {
    const navMenus = screen.getAllByTestId('mobileNavigationMenu')
    expect(navMenus.length).toBe(2)

    expect(navMenus[0].classList).not.toStrictEqual(navMenus[1].classList)

    // })
  })
})