'use client'

import Link from 'next/link';
import { CSSProperties, useState } from 'react';
import styles from './MobileNavigationBar.module.css';
import utils from './utils.module.css';
import Exit from '../icons/Exit';
import Hamburger from '../icons/Hamburger';
import LogoStandalone from '../icons/LogoStandalone';
import MobileNavigationMenu from './MobileNavigationMenu';

interface Props {
  style?: CSSProperties,
  hideLogo?: boolean,
}

/**
 * Navigation bar on mobile and desktop.
 * @param props
 */
export default function MobileNavigationBar({ style, hideLogo }: Props) {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <nav className={hideLogo ? `${utils.mobileNavContent} ${utils.mobileNavContentWithoutLogo} ${styles.noDisplayDesktop}` : `${utils.mobileNavContent} ${styles.noDisplayDesktop}`} style={style}>
      <MobileNavigationMenu
        visible={menuVisible}
        onClose={() => setMenuVisible(false)}
      />

      <Link href="/" aria-label="Website Logo" className={styles.logoStandalone}>

        <LogoStandalone
          width={30.5}
          height={30.5}
        />

      </Link>
      <button
        className={utils.mobileNavContentButton}
        onClick={() => setMenuVisible(true)}
        tabIndex={0}
      >
        <Hamburger
          width={24}
          height={24}
        />
      </button>
    </nav>
  );
}