import styles from './page.module.css'
import MDXContent from "@/app/(document)/[id]/MDXContent"
import getWork from "./getWork"

export const dynamicParams = false

interface Props {
  params: {
    id: string,
  }
}

export default async function Work({ params }: Props) {
  const { frontmatter, serialized } = await getWork(params.id)

  return (
    <div className={styles.container}>
      <MDXContent source={serialized} />
    </div>
  )
}