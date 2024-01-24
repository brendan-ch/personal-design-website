'use client'

import { IframeHTMLAttributes, useState } from "react"
import styles from './EmbedFrame.module.css'
import ActionButton from "@/common/ActionButton"
import Image from "next/image";

interface Props extends IframeHTMLAttributes<HTMLIFrameElement> {
  /**
   * The webpage to display when the load button is clicked.
   */
  src: string,
  /**
   * Text to display for the Load button. The webpage is loaded
   * when this button is clicked.
   */
  loadButtonText: string,
  /**
   * Preview image to load in the background.
   * This should be representative of the webpage being loaded.
   */
  backgroundImageSrc: string,
  /**
   * Alt text for the preview image in the background.
   */
  backgroundImageAlt: string,
  /**
   * Custom styling to apply to the embed frame container.
   */
  style?: React.CSSProperties,
}

/**
 * MDX component which loads an iframe in a page.
 * For better performance, links are only loaded on user interaction.
 * @param props
 * @returns
 */
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