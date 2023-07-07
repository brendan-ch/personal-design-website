import Link from 'next/link'
import styles from './404.module.css'
import utils from '../app/utils.module.css'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'We couldn\'t find the page you were looking for.',
}

export default function ServerError() {
  const capybara = 'https://images.unsplash.com/photo-1595017013941-cab3d4c8d02f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3570&q=80'

  return (
    <main className={styles.main}>
      <h1 className={utils.h0Text}>Internal Server Error</h1>
      <p>Something went wrong when loading this page. Maybe try again later?</p>
      <Link href="/">Back to home</Link>
      <div className={styles.imageContainer}>
        <Image
          alt="Capybara in pool"
          src={capybara}
          fill
        />
      </div>
    </main>
  )
}