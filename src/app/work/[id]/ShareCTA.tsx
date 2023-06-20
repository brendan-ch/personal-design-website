'use client'

import { useCallback, useEffect, useState } from 'react'
import styles from './ShareCTA.module.css'
import utils from '../../utils.module.css'

/**
 * Represents a link to an external page.
 */
interface PageExternalLink {
  /**
   * Name of the link to display to the user.
   */
  name: string,
  /**
   * URL to link to.
   */
  url: string,
}

interface Props {
  /**
   * Additional share links to include, in addition to the "Copy to clipboard" button.
   */
  links: PageExternalLink[],
  /**
   * Link for the current page to copy.
   */
  copyLink: string,
}

const COPY_TIMEOUT = 1000;

/**
 * Share callout component which can be used inside the content page.
 * @param param0
 */
export default function ShareCTA({ links, copyLink }: Props) {
  const [copied, setCopied] = useState(false);

  /**
   * Write to the user's clipboard and set state.
   */
  const handleCopy = useCallback(function handleCopy() {
    navigator.clipboard.writeText(copyLink);

    setCopied(true);
  }, [copyLink]);

  useEffect(() => {
    // If copied state set to true, start a timer to set it back to false
    function handleSetCopyToFalse() {
      setCopied(false);
    }
    
    if (copied) {
      const id = setTimeout(handleSetCopyToFalse, COPY_TIMEOUT);
      return () => clearTimeout(id);
    }

    return () => {};
  }, [copied]);

  return (
    <div className={styles.container}>
      <div className={styles.clickable}>
        <p className={`${utils.monoText} ${styles.gray}`}>Share this project</p>
      </div>
      <button className={`${styles.clickable} ${styles.underlineOnHover}`} onClick={handleCopy}>
        <p>{copied ? 'Link copied to clipboard!' : 'Copy link'}</p>
      </button>
      {links.map((value) => (
        <a className={`${styles.clickable} ${styles.underlineOnHover}`} href={value.url} key={value.url} target="_blank" rel="noreferrer">
          <p>
            {value.name}
          </p>
        </a>
      ))}
    </div>
  )
}