import Footer from "./Footer";
import styles from './DesktopSideNavigation.module.css'
import Link from "next/link";

interface Props {
  onNoteOpen: () => any,
}

export default function DesktopSideNavigation({
  onNoteOpen
}: Props) {
  return (
    <div className={styles.container}>
      {/* Standalone logo */}
      <div></div>

      {/* Navigation buttons */}
      <div className={styles.navigationButtons}>
        <Link href="/">
          Featured Works
        </Link>
        <Link href="/ui-ux-design">
          UI/UX Design
        </Link>
        <Link href="/graphic-design">
          Graphic Design
        </Link>
        <Link href="/wip">
          Work in Progress
        </Link>
      </div>
      <Footer onNoteOpen={onNoteOpen} />
    </div>
  );
}