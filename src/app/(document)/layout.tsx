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
      </head>
      <body>
        <div className={styles.rootContainer}>

          {/* to-do: implement back button bar */}
          {/* children will contain sidebar (as MDX renderer) and main content renderer */}
          {/* since root layout cannot be a client component */}

          {children}
        </div>

      </body>
    </html>
  )
}
