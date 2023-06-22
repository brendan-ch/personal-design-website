import MDXSidebar from './MDXSidebar'
import { getDocument } from './page'
import styles from './layout.module.css'
import utils from '../../utils.module.css'

interface Props {
  params: {
    id: string,
  },
  children: React.ReactNode,
}

export default async function DocumentLayout({ params, children }: Props) {
  const { frontmatter, serialized } = await getDocument(params.id)

  return (
    // Get MDX content here and pass it down to sidebar
    // Render children as well
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <a className={`${utils.monoText} ${utils.smallText}`} href="/">
          Back to Home
        </a>

        {/* to-do: pass content */}
        <div className={styles.tableOfContents}>
          <MDXSidebar source={serialized} />
        </div>
      </div>
      <div className={styles.contentContainer}>
        {children}
      </div>
    </div>
  )
}