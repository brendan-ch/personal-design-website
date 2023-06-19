import Link from 'next/link';
import styles from './Footer.module.css';

interface Props {
  onNoteOpen: () => any,
}

/**
 * Generic, non-customizable footer with links to different pages.
 */
export default function Footer({
  onNoteOpen,
}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <button onClick={onNoteOpen}>
          <p>A note from Brendan</p>
        </button>
      </div>
      <div className={styles.row}>
        <Link href="/privacy">
          <p>Privacy Policy</p>
        </Link>
        <Link href="/fair-use">
          <p>Fair Use Notice</p>
        </Link>
      </div>
      <div className={styles.row}>
        <Link href="/open-source-licenses">
          <p>Open Source Licenses</p>
        </Link>
      </div>
      <div className={styles.row}>
        <Link href="www.bchen.dev">
          <p>Visit bchen.dev</p>
        </Link>
      </div>
    </div>
  );
}