import styles from './HomeContent.module.css'
import utils from '../utils.module.css'
import { Frontmatter, Work } from './work/[id]/getWork'
import GalleryItem from './GalleryItem'
import RenderControl from './RenderControl'

interface Props {
  columns: Work<Frontmatter>[][],
  headline: string,
}

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
                />
              ))}
            </RenderControl>
          </div>
        ))}
      </div>
    </main>
  )
}