import { Metadata } from 'next'
import styles from './page.module.css'
import utils from '../utils.module.css'
import GalleryItem from './GalleryItem'
import getWorks from './work/[id]/getWorks'

export const metadata: Metadata = {
  title: 'Featured Works',
  description: 'Featured works on the design.bchen.dev website.'
}

const column1 = ['the-birds', 'uhs-planner-cover']
const column2 = ['headspace-logo-redesign', 'spirit-week-poster']

const columns = [column1, column2]

export default async function Home() {
  const workColumns = await Promise.all(columns.map(async (column) => {
    return await getWorks(column)
  }))

  return (
    <main className={styles.main}>
      <div className={styles.heading}>
        <h1 className={utils.h0Text}>Featured Works</h1>
        <p className={`${utils.monoText} ${utils.smallText}`}>by Brendan Chen</p>
      </div>
      {/* Wrap the columns with a div */}
      <div className={styles.columns}>
        {workColumns.map((column, i) => (
          <div className={styles.column} key={i}>
            {column.map(({ frontmatter, previewImageSize }, j) => (
              <GalleryItem
                title={frontmatter.title}
                date={frontmatter.date}
                imageSrc={frontmatter.previewImage}
                imageAlt={`Preview image for ${frontmatter.title}`}
                imageSize={previewImageSize}
                key={j}
                href={`/work/${columns[i][j]}`}
                description={frontmatter.description}
              />
            ))}
          </div>
        ))}
      </div>
    </main>
  )
}
