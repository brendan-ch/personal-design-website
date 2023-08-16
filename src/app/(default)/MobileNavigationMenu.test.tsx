import { render, screen } from "@testing-library/react"
import MobileNavigationMenu, { MobileNavMenuButton } from "./MobileNavigationMenu"
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { Page } from "./DesktopSideNavigation"

const mockPages: Page[] = [
  {
    title: 'Featured Works',
    href: '/'
  },
]

describe('MobileNavMenuButton', () => {
  it('Renders a link to specifed href', () => {
    render(<MobileNavMenuButton
      text="Testing"
      href="/test-link"
    />);

    const a = screen.getByRole('link');
    expect(a).toHaveAttribute('href', '/test-link');
  });

  it('Renders the correct text', () => {
    render(<MobileNavMenuButton
      text="Testing"
      href="/test-link"
    />);

    const text = screen.getByText("Testing");
    expect(text).toBeInTheDocument();
  });
});

describe('MobileNavigationMenu', () => {
  it('Renders differently based on visibility', () => {
    render(<>
      <MobileNavigationMenu pages={mockPages} visible onClose={() => { }} />
      <MobileNavigationMenu pages={mockPages} visible={false} onClose={() => { }} />
    </>)

    const menus = screen.getAllByTestId('mobileNavigationMenu')
    expect(menus[0].classList).not.toStrictEqual(menus[1].classList)
  })

  it('Calls onClose prop', async () => {
    const fn = jest.fn()
    const user = userEvent.setup()

    render(
      <>
        <MobileNavigationMenu
          pages={mockPages}
          onClose={fn}
          visible
        />
      </>
    )

    const exitTitle = screen.getByTitle('Exit')
    await user.click(exitTitle)

    expect(fn).toHaveBeenCalled()
  })
})