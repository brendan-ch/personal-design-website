'use client';

import Footer from "./Footer";
import styles from './DesktopSideNavigation.module.css'
import Link from "next/link";
import LogoStandalone from "@/icons/LogoStandalone";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import WelcomeOverlay from "./WelcomeOverlay";

interface Page {
  title: string,
  href: string,
}

interface Props {
  pages: Page[],
}

export default function DesktopSideNavigation({ pages }: Props) {
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
        {pages.map(({ href, title }) => (
          <Link href={href} key={href}>
            <p className={pathname === href ? styles.selected : undefined}>{title}</p>
          </Link>
        ))}
      </div>
      <Footer onNoteOpen={() => setOverlayVisible(true)} />
    </div>
  );
}