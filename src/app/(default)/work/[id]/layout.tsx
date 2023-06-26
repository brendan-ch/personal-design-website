import Exit from '@/icons/Exit'
import ShareCTA from './ShareCTA'
import styles from './layout.module.css'
import getWork from './getWork'
import { Metadata, ResolvingMetadata } from 'next'

interface LayoutProps {
  params: {
    id: string,
  },
  children: React.ReactNode,
}

export async function generateMetadata(
  { params }: LayoutProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { frontmatter } = await getWork(params.id)
  
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    // TO-DO: dynamically generate image based on page
  }
}

export default async function WorkLayout({ children, params }: LayoutProps) {
  const { frontmatter, serialized } = await getWork(params.id)
  
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