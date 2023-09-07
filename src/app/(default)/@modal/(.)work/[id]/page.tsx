import fs from 'fs/promises'
import path from 'path'
import styles from '../../../work/[id]/page.module.css'
import MDXContent from '@/app/(default)/work/[id]/MDXContent'

interface Props {
  params: {
    id: string,
  }
}

export default async function Work({ params }: Props) {
  return (
    <div className={styles.container}>
      {/* @ts-ignore Server Component */}
      <MDXContent id={params.id} />
    </div>
  )
}