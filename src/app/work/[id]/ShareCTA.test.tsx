import { render, screen, waitFor } from "@testing-library/react"
import ShareCTA, { PageExternalLink } from "./ShareCTA"
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

describe('ShareCTA', () => {
  it('Renders a button to copy a link', async () => {
    const user = userEvent.setup()

    render(<ShareCTA links={[]} copyLink="https://example.com" />)

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()

    await user.click(button)

    const text = screen.getByText('Link copied to clipboard!')
    expect(text).toBeInTheDocument()
  });

  it('Renders passed links', () => {
    const links: PageExternalLink[] = [
      {
        name: 'Google',
        url: 'https://google.com',
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com',
      },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com',
      },
    ];

    // Render with links
    render(<ShareCTA links={links} copyLink="https://example.com" />);

    const renderedLinks = screen.getAllByRole('link');
    expect(renderedLinks.length).toBe(3);

    // Expect links to render in order
    expect(renderedLinks[0].getAttribute('href')).toStrictEqual(links[0].url);
    expect(renderedLinks[0].textContent).toStrictEqual(links[0].name);
    
    expect(renderedLinks[1].getAttribute('href')).toStrictEqual(links[1].url);
    expect(renderedLinks[1].textContent).toStrictEqual(links[1].name);
    
    expect(renderedLinks[2].getAttribute('href')).toStrictEqual(links[2].url);
    expect(renderedLinks[2].textContent).toStrictEqual(links[2].name);
  });
});