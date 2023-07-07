import { WHITE } from '../Constants'
import '../globals.css'
import styles from './layout.module.css'
import utils from '../utils.module.css'

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
        <link rel="stylesheet" href="https://use.typekit.net/upd1iml.css" />
        <meta name="theme-color" content={WHITE} />
      </head>
      <body>
        <div className={styles.rootContainer}>
          <div className={utils.maxWidthWrapper}>
            {children}
          </div>
        </div>

      </body>
    </html>
  )
}
