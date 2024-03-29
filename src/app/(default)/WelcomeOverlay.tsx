'use client'

import InfoOverlay from "@/common/InfoOverlay"
import Anchor from "@/common/Anchor"
import ActionButton from "@/common/ActionButton"

interface Props {
  /**
   * Whether the welcome overlay is visible.
   */
  visible: boolean,
  /**
   * Callback for when the welcome overlay is closed.
   * @returns
   */
  onClose: () => any,
}

/**
 * Wrapper around the `InfoOverlay` component for the welcome overlay.
 */
export default function WelcomeOverlay({
  visible,
  onClose
}: Props) {
  return (
    <InfoOverlay
      onClose={onClose}
      visible={visible}
    >
      <Anchor text="A note from Brendan" />
      <p>I’m Brendan, a designer and developer in Orange, CA. Welcome to my website!</p>
      <p>
        This place is a creative outlet for me to showcase my design works.
        If you’d like, feel free to check out <a rel="noreferrer" target="_blank" href="https://bchen.dev/work">
          <u>
            my other projects
          </u>
        </a>, or <a rel="noreferrer" target="_blank" href="https://bchen.dev">
          <u>
            learn more about what I do
          </u>
        </a>.
      </p>
      <p>Happy exploring!</p>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
      }}>
        <ActionButton
          highlighted
          text="Start exploring"
          onClick={onClose}
        />
        <ActionButton
          useRegularLink
          href="https://bchen.dev"
          text="Learn more about me"
        />
      </div>
    </InfoOverlay>
  )
}