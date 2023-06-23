import { WHITE } from '../Constants'
import '../globals.css'
import styles from './layout.module.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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

          {/* to-do: implement back button + table of contents sidebar */}
          {/* since root layout cannot be a client component, */}
          {/* have content be a separate client component */}

          {children}
        </div>

      </body>
    </html>
  )
}
