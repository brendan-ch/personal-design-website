import { getDocument } from './page'

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
    <div>
      <div>
        <a href="/">Back to Home</a>

        {/* to-do: pass content */}
        {/* <MDXSidebar /> */}
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}