import { Metadata } from 'next';
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Work in Progress',
  description: 'Coming soon...',
  openGraph: {
    title: 'Work in Progress',
    description: 'Coming soon...',
    images: [
      {
        width: 1200,
        height: 630,
        url: '/static/og-work-in-progress.png'
      },
    ],
  },
}

export default function WIP() {
  return (
    <main className={styles.main}>
      <p>Coming soon...</p>
    </main>
  );
}