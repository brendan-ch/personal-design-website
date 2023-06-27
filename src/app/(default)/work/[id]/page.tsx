import fs from 'fs/promises'
import path from 'path'
import styles from './page.module.css'
import getWork from "./getWork"
import MDXContent from './MDXContent'

export const dynamicParams = false

interface Props {
  params: {
    id: string,
  }
}

export async function generateStaticParams() {
  // Fetch content from folder
  const files = await fs.readdir(path.join(process.cwd(), 'src', 'content', 'work'))

  // Return relevant IDs so they can be prerendered
  return files.map((file) => ({
    id: file.split('.')[0],
  }))
}

export default async function Work({ params }: Props) {
  const { frontmatter, serialized, imageSizes } = await getWork(params.id)

  return (
    <div className={styles.container}>
      <MDXContent source={serialized} imageSizes={imageSizes} />
    </div>
  )
}