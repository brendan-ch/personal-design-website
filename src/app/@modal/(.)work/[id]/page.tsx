import fs from 'fs/promises'
import path from 'path'
import styles from '../../../work/[id]/page.module.css'

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
  return (
    <div className={styles.container}>
      <p>Intercepted modal</p>
      {/* @ts-ignore Server Component */}
      {/* <MDXContent id={params.id} /> */}
    </div>
  )
}