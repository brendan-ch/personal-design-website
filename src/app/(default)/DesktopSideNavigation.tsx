'use client';

import Footer from "./Footer";
import styles from './DesktopSideNavigation.module.css'
import Link from "next/link";
import LogoStandalone from "@/icons/LogoStandalone";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import WelcomeOverlay from "./WelcomeOverlay";

export default function DesktopSideNavigation() {
  const pathname = usePathname();
  const [overlayVisible, setOverlayVisible] = useState(false);

  // Connect with browser storage to control initial overlay state
  useEffect(() => {
    const value = window.localStorage.getItem('welcomeShown')
    if (!value) {
      setOverlayVisible(true)
      
      window.localStorage.setItem('welcomeShown', '1')
    }
  }, [])

  return (
    <div className={styles.container}>
      <WelcomeOverlay
        onClose={() => setOverlayVisible(false)}
        visible={overlayVisible}
      />

      {/* Standalone logo */}
      <Link href="/">
        <LogoStandalone
          width={72}
          height={72}
        />
      </Link>

      {/* Navigation buttons */}
      <div className={styles.navigationButtons}>
        <Link href="/">
          <p className={pathname === '/' ? styles.selected : undefined}>Featured Works</p>
        </Link>
        <Link href="/ui-ux-design">
          <p className={pathname === '/ui-ux-design' ? styles.selected : undefined}>UI/UX Design</p>
        </Link>
        {/* <Link href="/graphic-design">
          <p className={pathname === '/graphic-design' ? styles.selected : undefined}>Graphic Design</p>
        </Link> */}
        <Link href="/wip">
          <p className={pathname === '/wip' ? styles.selected : undefined}>Work in Progress</p>
        </Link>
      </div>
      <Footer onNoteOpen={() => setOverlayVisible(true)} />
    </div>
  );
}