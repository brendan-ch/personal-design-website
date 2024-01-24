import styles from '../../../work/[id]/page.module.css'
import MDXContent from '@/app/(default)/work/[id]/MDXContent'

interface Props {
  params: {
    /**
     * The ID (filename) of the work to render.
     */
    id: string,
  }
}

/**
 * Primary content rendered for the intercepted route for the work page.
 * @param param0
 * @returns
 */
export default async function Work({ params }: Props) {
  return (
    <div className={styles.container}>
      {/* See RenderControl component and HomeContent.tsx L23 */}
      <div className="workIntercepted"></div>
      {/* @ts-ignore Server Component */}
      <MDXContent id={params.id} />
    </div>
  )
}