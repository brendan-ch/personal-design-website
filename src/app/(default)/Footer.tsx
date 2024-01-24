import styles from './Footer.module.css';

interface Props {
  /**
   * Callback for when the "A note from Brendan" button is clicked.
   * @returns
   */
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
        {/* to-do: switch back to Link component once
        this issue is fixed: https://github.com/vercel/next.js/issues/51565 */}
        <a href="/privacy">
          <p>Privacy Policy</p>
        </a>
        <a href="/fair-use">
          <p>Fair Use Notice</p>
        </a>
      </div>
      <div className={styles.row}>
        <a href="/open-source-licenses">
          <p>Open Source Licenses</p>
        </a>
      </div>
      <div className={styles.row}>
        <a href="https://www.bchen.dev" target="_blank" rel="noreferrer">
          <p>Visit bchen.dev</p>
        </a>
      </div>
    </div>
  );
}