'use client';

import Footer from "./Footer";
import styles from './DesktopSideNavigation.module.css'
import Link from "next/link";
import LogoStandalone from "@/icons/LogoStandalone";
import InfoOverlay from "./InfoOverlay";
import Anchor from "./Anchor";
import ActionButton from "./ActionButton";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function DesktopSideNavigation() {
  const pathname = usePathname();
  const [overlayVisible, setOverlayVisible] = useState(false);

  console.log(pathname);

  return (
    <div className={styles.container}>
      <InfoOverlay
        onClose={() => setOverlayVisible(false)}
        visible={overlayVisible}
      >
        <Anchor text="A note from Brendan" />
        <p>I’m Brendan, a designer and developer in Orange, CA. Welcome to my website!</p>
        <p>This place is a creative outlet for me to showcase my design works. If you’d like, feel free to check out my other projects, or learn more about what I do.</p>
        <p>Happy exploring!</p>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}>
          <ActionButton
            highlighted
            text="Start exploring"
          />
          <ActionButton
            text="Learn more about me"
          />
        </div>
      </InfoOverlay>
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