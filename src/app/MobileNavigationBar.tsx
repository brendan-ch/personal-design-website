'use client'

import Link from 'next/link';
import { CSSProperties } from 'react';
import styles from './MobileNavigationBar.module.css';
import Exit from '../icons/Exit';
import Hamburger from '../icons/Hamburger';
import LogoStandalone from '../icons/LogoStandalone';

interface Props {
  /**
   * @deprecated No longer used since 2022-11-11.
   */
  selected?: string,
  style?: CSSProperties,
  mobileButtonType?: 'hamburger' | 'close',
  onMobileButtonClick?: () => any,
  hideLogo?: boolean,
}

/**
 * Navigation bar on mobile and desktop.
 * @param props
 * 
 * @todo make tab list customizable, and add tests for it
 */
export default function MobileNavigationBar({ selected, style, mobileButtonType, onMobileButtonClick, hideLogo }: Props) {
  let button = (
    <button
      className={styles.menuContainer}
      onClick={onMobileButtonClick}
      tabIndex={0}
    >
      <Hamburger
        width={24}
        height={24}
      />
    </button>
  );

  if (mobileButtonType === 'close') {
    button = (
      <a
        className={styles.menuContainer}
        href="#"
        tabIndex={0}
      >
        <Exit
          width={24}
          height={24}
        />
      </a>
    );
  }

  return (
    <nav className={styles.container} style={style}>
      <div className={hideLogo ? `${styles.contentContainer} ${styles.contentContainerWithoutLogo}` : styles.contentContainer}>
        
        <Link href="/" aria-label="Website Logo" className={styles.logoStandalone}>

          <LogoStandalone
            width={30.5}
            height={30.5}
          />

        </Link>
        {button}
      </div>
    </nav>
  );
}