'use client'

import { IframeHTMLAttributes, useState } from "react"
import styles from './EmbedFrame.module.css'
import ActionButton from "@/common/ActionButton"
import Image from "next/image";

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
        <>
          <div className={styles.buttonContainer}>
            <ActionButton
              text={props.loadButtonText}
              onClick={() => setShouldLoad(true)}
            />
          </div>
          <div className={styles.backgroundImageContainer}>
            <Image
              className={styles.backgroundImage}
              src="https://images.unsplash.com/photo-1604890532358-4029426b27af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3474&q=80"
              alt="Next.js logo"
              fill
            />
          </div>
        </>
      )}
    </div>
  )
}