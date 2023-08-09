import Exit from '@/icons/Exit'
import ShareCTA, { PageExternalLink } from './ShareCTA'
import styles from './layout.module.css'
import utils from '../../../utils.module.css'
import getWork from './getWork'
import { Metadata, ResolvingMetadata } from 'next'
import MDXSidebar from '@/app/(document)/[id]/MDXSidebar'
import Link from 'next/link'

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
    openGraph: {
      images: frontmatter.ogImage ? {
        url: frontmatter.ogImage,
        width: 1200,
        height: 630,
      } : undefined,
    },
    // TO-DO: dynamically generate image based on page
  }
}

export default async function WorkLayout({ children, params }: LayoutProps) {
  const { frontmatter, serialized } = await getWork(params.id)
  
  // Get current page URL
  const currentPath = ['https://design.bchen.dev', 'work', params.id].join('/');
  const sharingLinks: PageExternalLink[] = [
    {
      name: 'LinkedIn',
      url: `https://linkedin.com/share/share-offsite?url=${encodeURIComponent(currentPath)}&title=${encodeURIComponent(frontmatter.title || '')}`
    },
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(currentPath)}`
    },
  ]
  
  return (
    <div className={styles.container}>
      <div className={`${utils.maxWidthWrapper} ${styles.contentFadeIn}`}>
        {/* Exit button, positioned relative to container */}
        <Link className={styles.exitButton} href="/">
          <Exit className={styles.exitButtonIcon} />
          <Exit width={24} height={24} className={styles.exitButtonIconMobile} />
        </Link>
        <div className={styles.leftSidebar}>
          {/* MDX sidebar with header links */}
          <div className={styles.tableOfContents}>
            <MDXSidebar source={serialized} />
          </div>
        </div>
        <div className={styles.shareContainerMobile}>
          <ShareCTA
            copyLink={currentPath}
            links={sharingLinks}
          />
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
          <div className={styles.shareContainer}>
            <ShareCTA
              copyLink={currentPath}
              links={sharingLinks}
            />
          </div>
        </div>
      </div>
    </div>
  )
}