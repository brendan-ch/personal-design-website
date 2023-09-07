import MDXSidebar from './MDXSidebar'
import styles from './layout.module.css'
import utils from '../../utils.module.css'
import getDocument from './getDocument'
import { Metadata, ResolvingMetadata } from 'next'

interface Props {
  params: {
    id: string,
  },
  children: React.ReactNode,
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { frontmatter } = await getDocument(params.id)
  
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      images: frontmatter.ogImage ? [
        {
          width: 1200,
          height: 630,
          url: frontmatter.ogImage,
        },
      ] : undefined,
    },
  }
}

export default async function DocumentLayout({ params, children }: Props) {
  const { serialized } = await getDocument(params.id)

  return (
    // Get MDX content here and pass it down to sidebar
    // Render children as well
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <a className={`${utils.monoText} ${utils.smallText}`} href="/">
          ← Back to Home
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