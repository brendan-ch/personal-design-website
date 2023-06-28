import Exit from '@/icons/Exit'
import ShareCTA from './ShareCTA'
import styles from './layout.module.css'
import utils from '../../../utils.module.css'
import getWork from './getWork'
import { Metadata, ResolvingMetadata } from 'next'
import MDXSidebar from '@/app/(document)/[id]/MDXSidebar'

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
        <div className={styles.tableOfContents}>
          <MDXSidebar source={serialized} />
        </div>
      </div>
      {children}
      <div className={styles.rightSidebar}>
        {/* Title and description based on frontmatter */}
        <div className={styles.descriptionContainer}>
          <div className={styles.titleContainer}>
            <p className={`${utils.monoText} ${utils.smallText}`}>{frontmatter.title}</p>
            <p className={`${utils.monoText} ${utils.smallText} ${styles.date}`}>{frontmatter.date}</p>
          </div>
          <p className={utils.smallText}>{frontmatter.description}</p>
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