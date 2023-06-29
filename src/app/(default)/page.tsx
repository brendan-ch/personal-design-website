import { Metadata } from 'next'
import styles from './page.module.css'
import utils from '../utils.module.css'
import getWork from './work/[id]/getWork'
import GalleryItem from './GalleryItem'

export const metadata: Metadata = {
  title: 'Featured Works',
  description: 'Featured works on the design.bchen.dev website.'
}

const column1 = ['the-birds', 'abstract-color-art']
const column2 = ['headspace-logo-redesign', 'abstract-color-art', 'spirit-week-poster']

export default async function Home() {
  const { frontmatter, previewImageSize } = await getWork('headspace-logo-redesign')

  return (
    <main className={styles.main}>
      <div className={styles.heading}>
        <h1 className={utils.h0Text}>Featured Works</h1>
        <p className={`${utils.monoText} ${utils.smallText}`}>by Brendan Chen</p>
      </div>
      <GalleryItem
        description={frontmatter.description}
        title={frontmatter.title}
        date={frontmatter.date}
        imageSrc={frontmatter.previewImage!}
        imageAlt="Headspace Logo Redesign"
        imageSize={previewImageSize ? previewImageSize : {
          height: '1000',
          width: '2000',
          imagePath: frontmatter.previewImage!
        }}
        href="/work/headspace-logo-redesign"
      />
    </main>
  )
}
