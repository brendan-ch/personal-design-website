import DesktopSideNavigation, { Page } from './DesktopSideNavigation'
import MobileNavigationBar from './MobileNavigationBar'
import { Analytics } from '@vercel/analytics/react'
import '../globals.css'
import styles from './layout.module.css'
import utils from '../utils.module.css'
import { BACKGROUND } from '../Constants'
import ScrollControl from './ScrollControl'

export const metadata = {
  title: 'Design by Brendan Chen',
  description: 'Design works by Brendan Chen.',
}

// Control pages to display in desktop/mobile navigation bars.
const pages: Page[] = [
  {
    title: 'Select Works',
    href: '/',
  },
  {
    title: 'UI/UX Design',
    href: '/ui-ux',
  },
  {
    title: 'Graphic Design',
    href: '/graphic-design',
  },
]

/**
 * Root layout of the (default) route group.
 * @param param0
 * @returns
 * @see https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
 */
export default function RootLayout({
  children,
  modal,  // render @modal content separately in layout
}: {
  children: React.ReactNode,
  modal: React.ReactNode,
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `history.scrollRestoration = "manual"`,
          }}
        />
        <link rel="stylesheet" href="https://use.typekit.net/upd1iml.css" />
        <meta name="theme-color" content={BACKGROUND} />
      </head>
      <body>
        <div className={styles.rootContainer}>
          <div className={utils.maxWidthWrapper}>
            <ScrollControl />
            <MobileNavigationBar pages={pages} />
            <DesktopSideNavigation pages={pages} />
            {children}
            {modal}
          </div>

        </div>

        <Analytics />
      </body>
    </html>
  )
}
