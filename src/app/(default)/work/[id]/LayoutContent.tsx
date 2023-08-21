import styles from './LayoutContent.module.css'
import utils from '../../../utils.module.css'

import ExitButton from './ExitButton'

interface Props {
  children: React.ReactNode,

  /**
   * ID of the work page.
   */
  id: string,

  /**
   * Control the behavior of the exit button.
   * By default it returns the user to the home page.
   */
  goBackOnExit?: boolean,
}

/**
 * Layout content shared between intercepted route (@modal/(.)work/[id]) and
 * default rout (/work/[id]).
 * @param param0
 * @returns
 */
export default async function LayoutContent({
  children,
  id,
  goBackOnExit,
}: Props) {
  // const { frontmatter, serialized } = await getWork(id)

  // Get current page URL
  // const currentPath = ['https://design.bchen.dev', 'work', id].join('/');
  // const sharingLinks: PageExternalLink[] = [
  //   {
  //     name: 'LinkedIn',
  //     url: `https://linkedin.com/share/share-offsite?url=${encodeURIComponent(currentPath)}&title=${encodeURIComponent(frontmatter.title || '')}`
  //   },
  //   {
  //     name: 'Twitter',
  //     url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(currentPath)}`
  //   },
  // ]
  
  return (
    <div className={styles.container}>
      <div className={`${utils.maxWidthWrapper} ${styles.contentFadeIn}`}>
        {/* Exit button, positioned relative to container */}
        <ExitButton goBackOnExit={goBackOnExit} />
        <div className={styles.leftSidebar}>
          {/* MDX sidebar with header links */}
          <div className={styles.tableOfContents}>
            {/* <MDXSidebar source={serialized} /> */}
          </div>
        </div>
        <div className={styles.shareContainerMobile}>
          {/* <ShareCTA
            copyLink={currentPath}
            links={sharingLinks}
          /> */}
        </div>
        {children}
        <div className={styles.rightSidebar}>
          {/* Title and description based on frontmatter */}
          <div className={styles.descriptionContainer}>
            <div className={styles.titleContainer}>
              <p className={`${utils.monoText} ${utils.smallText}`}>Title</p>
              <p className={`${utils.monoText} ${utils.smallText} ${styles.date}`}>Date</p>
            </div>
            <p className={utils.smallText}>Description</p>
          </div>
          {/* Share CTA */}
          <div className={styles.shareContainer}>
            {/* <ShareCTA
              copyLink={currentPath}
              links={sharingLinks}
            /> */}
          </div>
        </div>
      </div>
    </div>
  )
}