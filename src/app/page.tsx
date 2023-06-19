'use client'

import styles from './page.module.css'
import InfoOverlay from './InfoOverlay'
import Anchor from './Anchor'
import ActionButton from './ActionButton'

export default function Home() {
  return (
    <main className={styles.main}>
      <InfoOverlay
        onClose={() => {}}
        visible
      >
        <Anchor text="Hello world" />
        <p>Hello World</p>
        <ActionButton
          highlighted
          text="Hello World"
        />
      </InfoOverlay>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
    </main>
  )
}
