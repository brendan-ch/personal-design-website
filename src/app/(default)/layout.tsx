import DesktopSideNavigation from './DesktopSideNavigation'
import MobileNavigationBar from './MobileNavigationBar'
import '../globals.css'
import styles from './layout.module.css'
import utils from '../utils.module.css'
import { BACKGROUND } from '../Constants'

export const metadata = {
  title: 'Design by Brendan Chen',
  description: 'Design works by Brendan Chen.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
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
            <MobileNavigationBar />
            <DesktopSideNavigation />
            {children}
          </div>

        </div>

      </body>
    </html>
  )
}
