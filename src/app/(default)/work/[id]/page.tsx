import styles from './page.module.css'
import getWork from "./getWork"
import MDXContent from './MDXContent'

export const dynamicParams = false

interface Props {
  params: {
    id: string,
  }
}

export default async function Work({ params }: Props) {
  const { frontmatter, serialized, imageSizes } = await getWork(params.id)

  return (
    <div className={styles.container}>
      <MDXContent source={serialized} imageSizes={imageSizes} />
    </div>
  )
}