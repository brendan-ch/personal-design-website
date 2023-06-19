'use client';

import Footer from "./Footer";
import styles from './DesktopSideNavigation.module.css'
import Link from "next/link";
import LogoStandalone from "@/icons/LogoStandalone";
import InfoOverlay from "../common/InfoOverlay";
import Anchor from "../common/Anchor";
import ActionButton from "../common/ActionButton";
import { useState } from "react";
import { usePathname } from "next/navigation";
import WelcomeOverlay from "./WelcomeOverlay";

export default function DesktopSideNavigation() {
  const pathname = usePathname();
  const [overlayVisible, setOverlayVisible] = useState(false);

  return (
    <div className={styles.container}>
      <WelcomeOverlay
        onClose={() => setOverlayVisible(false)}
        visible={overlayVisible}
      />

      {/* Standalone logo */}
      <LogoStandalone
        width={72}
        height={72}
      />

      {/* Navigation buttons */}
      <div className={styles.navigationButtons}>
        <Link href="/">
          <p className={pathname === '/' ? styles.selected : undefined}>Featured Works</p>
        </Link>
        <Link href="/ui-ux-design">
          <p className={pathname === '/ui-ux-design' ? styles.selected : undefined}>UI/UX Design</p>
        </Link>
        <Link href="/graphic-design">
          <p className={pathname === '/graphic-design' ? styles.selected : undefined}>Graphic Design</p>
        </Link>
        <Link href="/wip">
          <p className={pathname === '/wip' ? styles.selected : undefined}>Work in Progress</p>
        </Link>
      </div>
      <Footer onNoteOpen={() => setOverlayVisible(true)} />
    </div>
  );
}