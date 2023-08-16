import styles from './LayoutContent.module.css'
import utils from '../../../utils.module.css'

import Link from 'next/link'
import Exit from '@/icons/Exit'
import MDXSidebar from '@/app/(document)/[id]/MDXSidebar'
import ShareCTA, { PageExternalLink } from './ShareCTA'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { Frontmatter } from './getWork'

interface Props {
  children: React.ReactNode,
  sharingLinks: PageExternalLink[],
  currentPath: string,
  serialized: MDXRemoteSerializeResult,
  frontmatter: Frontmatter,
}

export default function LayoutContent({
  children,
  currentPath,
  sharingLinks,
  frontmatter,
  serialized,
}: Props) {
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