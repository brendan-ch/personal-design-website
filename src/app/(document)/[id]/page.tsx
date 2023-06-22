import fs from 'fs/promises'
import path from 'path'
import utils from '../../utils.module.css'
import styles from './page.module.css'
import MDXContent from './MDXContent'
import getDocument from './getDocument'

export const dynamicParams = false

export async function generateStaticParams() {
  // Fetch content from folder
  const files = await fs.readdir(path.join(process.cwd(), 'src', 'content', 'document'))

  // Return relevant IDs so they can be prerendered
  return files.map((file) => ({
    id: file.split('.')[0],
  }))
}

interface Props {
  params: {
    id: string,
  },
}

export default async function Document({ params }: Props) {
  const { frontmatter, serialized } = await getDocument(params.id)

  return (
    <main className={styles.container}>
      {/* Desktop sidebar */}

      <h1 className={utils.h0Text}>{frontmatter.title}</h1>
      <MDXContent source={serialized} />
    </main>
  )
}