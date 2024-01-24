import styles from './HomeContent.module.css'
import utils from '../utils.module.css'
import { Frontmatter, Work } from './work/[id]/getWork'
import GalleryItem from './GalleryItem'
import RenderControl from './RenderControl'

interface Props {
  /**
   * Works to display on the page.
   * Works are displayed in a two-column layout on desktop,
   * and scaled down to one column on mobile.
   */
  columns: Work<Frontmatter>[][],
  /**
   * The headline text to display at the top of the page.
   */
  headline: string,
}

/**
 * Content to display on the home page, which may
 * have different content depending on the section.
 * @param param0
 * @returns
 */
export default function HomeContent({ columns, headline }: Props) {
  return (
    <main className={styles.main}>
      <div className={styles.heading}>
        <h1 className={utils.h0Text}>{headline}</h1>
        <p className={`${utils.monoText} ${utils.smallText}`}>by Brendan Chen</p>
      </div>
      {/* Wrap the columns with a div */}
      <div className={styles.columns}>
        {columns.map((column, i) => (
          <div className={styles.column} key={i}>
            <RenderControl className="workIntercepted" renderIfPresent={false}>
              {column.map(({ id, frontmatter, previewImageSize }, j) => (
                // @ts-ignore Server Component
                <GalleryItem
                  id={id}
                  title={frontmatter.title}
                  date={frontmatter.date}
                  imageSrc={frontmatter.previewImage}
                  imageAlt={`Preview image for ${frontmatter.title}`}
                  imageSize={previewImageSize}
                  key={id}
                  href={`/work/${id}`}
                  description={frontmatter.description}
                  sizes="(max-width: 880px) 80vw, (max-width: 1200px) 50, 33vw"
                />
              ))}
            </RenderControl>
          </div>
        ))}
      </div>
    </main>
  )
}