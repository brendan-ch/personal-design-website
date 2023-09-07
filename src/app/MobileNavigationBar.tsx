'use client'

import Link from 'next/link';
import { CSSProperties, useEffect, useState } from 'react';
import styles from './MobileNavigationBar.module.css';
import utils from './utils.module.css';
import Hamburger from '@/icons/Hamburger';
import LogoStandalone from '@/icons/LogoStandalone';
import MobileNavigationMenu from './MobileNavigationMenu';
import { usePathname } from 'next/navigation';
import { Page } from './DesktopSideNavigation';

interface Props {
  style?: CSSProperties,
  hideLogo?: boolean,
  pages: Page[],
}

/**
 * Navigation bar used on mobile.
 * Note that element is hidden past a certain breakpoint.
 * 
 * @param props
 */
export default function MobileNavigationBar({ style, hideLogo, pages }: Props) {
  const [menuVisible, setMenuVisible] = useState(false);

  const pathname = usePathname()
  
  useEffect(() => {
    setMenuVisible(false)
  }, [pathname])

  return (
    <nav className={hideLogo ? `${utils.mobileNavContent} ${utils.mobileNavContentWithoutLogo} ${styles.noDisplayDesktop}` : `${utils.mobileNavContent} ${styles.noDisplayDesktop}`} style={style}>
      <MobileNavigationMenu
        pages={pages}
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