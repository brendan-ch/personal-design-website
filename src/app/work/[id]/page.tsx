import fs from 'fs/promises'
import path from 'path'
import styles from './page.module.css'

interface Props {
  params: {
    id: string,
  }
}

export default async function Work({ params }: Props) {
  return (
    <div className={styles.container}>
      <p>Default modal</p>
      {/* @ts-ignore Server Component */}
      {/* <MDXContent id={params.id} /> */}
    </div>
  )
}