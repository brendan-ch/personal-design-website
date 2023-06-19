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
        <Anchor text="A note from Brendan" />
        <p>I’m Brendan, a designer and developer in Orange, CA. Welcome to my website!</p>
        <p>This place is a creative outlet for me to showcase my design works. If you’d like, feel free to check out my other projects, or learn more about what I do.</p>
        <p>Happy exploring!</p>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}>
          <ActionButton
            highlighted
            text="Start exploring"
          />
          <ActionButton
            text="Learn more about me"
          />
        </div>
      </InfoOverlay>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
    </main>
  )
}
