import Exit from '@/icons/Exit'
import ShareCTA from './ShareCTA'
import styles from './layout.module.css'

interface LayoutProps {
  children: React.ReactNode,
}

export default function WorkLayout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <button className={styles.exitButton}>
        <Exit className={styles.exitButtonIcon} />
      </button>
      <div className={styles.leftSidebar}>
        {/* MDX sidebar */}
      </div>
      <div className={styles.content}>
        {children}
      </div>
      <div className={styles.rightSidebar}>
        {/* Title and description based on frontmatter */}
        {/* Share CTA */}
        <ShareCTA
          copyLink="https://design.bchen.dev"
          links={[]}
        />
      </div>
    </div>
  )
}