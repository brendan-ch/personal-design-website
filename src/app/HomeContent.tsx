import styles from './HomeContent.module.css'
import utils from './utils.module.css'
// import { Frontmatter, Work } from './work/[id]/getWork'
import GalleryItem from './GalleryItem'

interface Props {
  // columns: any[][],
  headline: string,
}

export default function HomeContent({ headline }: Props) {
  return (
    <main className={styles.main}>
      <div className={styles.heading}>
        <h1 className={utils.h0Text}>{headline}</h1>
        <p className={`${utils.monoText} ${utils.smallText}`}>by Brendan Chen</p>
      </div>
      {/* Wrap the columns with a div */}
      <div className={styles.columns}>
        {/* @ts-ignore Server component */}
        <GalleryItem
          title={"Test"}
          date={'2023.09.06'}
          imageSrc={''}
          imageAlt={`Preview image`}
          // key={j}
          href={`/work/clockwise`}
          description={"Test"}
        />
      </div>
    </main>
  )
}