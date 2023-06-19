import styles from './InfoOverlay.module.css';

interface Props {
  visible: boolean,
  onClose: () => any,
  children?: React.ReactNode,
}

/**
 * Generic info overlay which displays as a full page on mobile.
 * @param props
 * @returns
 */
export default function InfoOverlay({
  visible,
  onClose,
  children,
}: Props) {
  return (
    // Invisible wrapper containing the overlay content
    <div
      className={visible ? `${styles.container} ${styles.containerVisible}` : styles.container}
      onClick={onClose}
      role="dialog"
    >
      {/* On mobile, display full page */}
      {/* On desktop display overlay */}
      <div className={styles.contentContainer} onClick={(e) => e.stopPropagation()}>
        {/* Children component, including any action buttons and anchors */}
        {children}
      </div>
    </div>
  )
}