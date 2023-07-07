import Link from 'next/link'
import utils from '../utils.module.css'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <main className={styles.main}>
      <h1 className={utils.h0Text}>Page Not Found</h1>
      <p>We couldn{"'"}t find the page you were looking for.</p>
      <p>
        <Link href="/">Back to home</Link>
      </p>
    </main>
  )
}