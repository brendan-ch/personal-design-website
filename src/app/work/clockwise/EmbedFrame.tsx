'use client'

import { IframeHTMLAttributes, useState } from "react"
import styles from './EmbedFrame.module.css'
import ActionButton from "@/common/ActionButton"
import Image from "next/image";

interface Props extends IframeHTMLAttributes<HTMLIFrameElement> {
  src: string,
  loadButtonText: string,
  backgroundImageSrc: string,
  backgroundImageAlt: string,
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
          role="presentation"
        />
      ) : (
        <>
          <div className={`${styles.buttonContainer} ${styles.desktopButtonContainer}`}>
            <ActionButton
              text={props.loadButtonText}
              onClick={() => setShouldLoad(true)}
              highlighted
            />
          </div>
          <div className={`${styles.buttonContainer} ${styles.mobileButtonContainer}`}>
            <ActionButton highlighted href={props.src} useRegularLink text={props.loadButtonText} />
          </div>
          <div className={styles.backgroundImageContainer}>
            <Image
              className={styles.backgroundImage}
              src={props.backgroundImageSrc}
              alt={props.backgroundImageAlt}
              fill
            />
          </div>
        </>
      )}
    </div>
  )
}