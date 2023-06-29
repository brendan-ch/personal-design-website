import { Metadata } from 'next'
import styles from './page.module.css'
import Link from 'next/link'
import getWork from './work/[id]/getWork'
import GalleryItem from './GalleryItem'

export const metadata: Metadata = {
  title: 'Featured Works',
  description: 'Featured works on the design.bchen.dev website.'
}

export default async function Home() {
  const { frontmatter, previewImageSize } = await getWork('headspace-logo-redesign')

  return (
    <main className={styles.main}>
      <Link href="/work/headspace-logo-redesign">Headspace Logo Redesign</Link>
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
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
      <p>Some page content</p>
    </main>
  )
}
