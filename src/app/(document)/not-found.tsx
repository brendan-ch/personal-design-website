import Link from 'next/link'
import utils from '../utils.module.css'
import styles from './not-found.module.css'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'We couldn\'t find the page you were looking for.',
}

export default function NotFound() {
  const capybara = 'https://images.unsplash.com/photo-1557431177-36141475c676?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'

  return (
    <main className={styles.main}>
      <h1 className={utils.h0Text}>Page Not Found</h1>
      <p>We couldn{"'"}t find the page you were looking for.</p>
      <Link href="/">Back to home</Link>
      <div className={styles.imageContainer}>
        <Image
          alt="Capybara in bath"
          src={capybara}
          fill
        />
      </div>
    </main>
  )
}