'use client';

import Footer from "./Footer";
import styles from './DesktopSideNavigation.module.css'
import Link from "next/link";

interface Props {
  onNoteOpen: () => any,
  selected?: 'Featured Works' | 'UI/UX Design' | 'Graphic Design' | 'Work in Progress',
}

export default function DesktopSideNavigation({
  onNoteOpen,
  selected,
}: Props) {
  return (
    <div className={styles.container}>
      {/* Standalone logo */}
      <div></div>

      {/* Navigation buttons */}
      <div className={styles.navigationButtons}>
        <Link href="/">
          <p className={selected === 'Featured Works' ? styles.selected : undefined}>Featured Works</p>
        </Link>
        <Link href="/ui-ux-design">
          <p className={selected === 'UI/UX Design' ? styles.selected : undefined}>UI/UX Design</p>
        </Link>
        <Link href="/graphic-design">
          <p className={selected === 'Graphic Design' ? styles.selected : undefined}>Graphic Design</p>
        </Link>
        <Link href="/wip">
          <p className={selected === 'Work in Progress' ? styles.selected : undefined}>Work in Progress</p>
        </Link>
      </div>
      <Footer onNoteOpen={onNoteOpen} />
    </div>
  );
}