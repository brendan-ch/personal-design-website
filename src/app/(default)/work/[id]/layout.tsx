import getWork from './getWork'
import { Metadata, ResolvingMetadata } from 'next'

interface LayoutProps {
  params: {
    id: string,
  },
  children: React.ReactNode,
}

export async function generateMetadata(
  { params }: LayoutProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { frontmatter } = await getWork(params.id)
  
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      images: frontmatter.ogImage ? {
        url: frontmatter.ogImage,
        width: 1200,
        height: 630,
      } : undefined,
    },
    // TO-DO: dynamically generate image based on page
  }
}

export default async function WorkLayout({ children, params }: LayoutProps) {
  return (
    <div>
      <p>Some layout component</p>
      {children}
    </div>
  )
}