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
      {/* Exit button, positioned relative to container */}
      <button className={styles.exitButton}>
        <Exit className={styles.exitButtonIcon} />
      </button>
      <div className={styles.leftSidebar}>
        {/* MDX sidebar with header links */}
      </div>
      <div className={styles.content}>
        {children}
      </div>
      <div className={styles.rightSidebar}>
        {/* Title and description based on frontmatter */}
        <div className={styles.description}>
          <div className={styles.titleContainer}>
            <p>{frontmatter.title}</p>
            <p>{frontmatter.date}</p>
          </div>
          <p>{frontmatter.description}</p>
        </div>
        {/* Share CTA */}
        <ShareCTA
          copyLink="https://design.bchen.dev"
          links={[]}
        />
      </div>
    </div>
  )
}