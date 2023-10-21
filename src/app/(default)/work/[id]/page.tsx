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
  const relevantIds = files.map((file) => ({
    id: file.split('.')[0],
  }))

  if (process.env.NODE_ENV === 'production') {
    return relevantIds.filter((obj) => !obj.id.includes('wip'))
  }

  return relevantIds
}

/**
 * The Work page renders and displays visual projects using the `MDXContent` component.
 * Pages are statically generated at build time from th `src/content` folder,
 * with filenames containing "wip" filtered out at production.
 * @param param0
 * @returns
 */
export default async function Work({ params }: Props) {
  return (
    <div className={styles.container}>
      {/* @ts-ignore Server Component */}
      <MDXContent id={params.id} />
    </div>
  )
}