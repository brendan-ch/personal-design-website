'use client'

import { IframeHTMLAttributes, useState } from "react"
import styles from './EmbedFrame.module.css'
import ActionButton from "@/common/ActionButton"

interface Props extends IframeHTMLAttributes<HTMLIFrameElement> {
  src: string,
  loadButtonText: string,
  style?: React.CSSProperties,
}

export default function EmbedFrame(props: Props) {
  const [shouldLoad, setShouldLoad] = useState(false);

  return (
    <div className={styles.container} style={props.style}>
      {shouldLoad ? (
        // TO-DO: on mobile, open the frame in a separate tab
        <iframe
          allowFullScreen
          className={styles.iframe}
          src={props.src}
        />
      ) : (
        <div className={styles.buttonContainer}>
          <ActionButton
            text={props.loadButtonText}
            onClick={() => setShouldLoad(true)}
          />
        </div>
      )}
    </div>
  )
}