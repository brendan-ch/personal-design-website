'use client'

import styles from './page.module.css'
import InfoOverlay from './InfoOverlay'
import Anchor from './Anchor'

export default function Home() {
  return (
    <main className={styles.main}>
      <InfoOverlay
        onClose={() => {}}
        visible
      >
        <Anchor text="Hello world" />
        <p>Hello World</p>
      </InfoOverlay>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
    </main>
  )
}
