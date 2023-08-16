import { PageExternalLink } from './ShareCTA'
import getWork from './getWork'
import { Metadata, ResolvingMetadata } from 'next'
import LayoutContent from './LayoutContent'

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
  const { frontmatter, serialized } = await getWork(params.id)
  
  // Get current page URL
  const currentPath = ['https://design.bchen.dev', 'work', params.id].join('/');
  const sharingLinks: PageExternalLink[] = [
    {
      name: 'LinkedIn',
      url: `https://linkedin.com/share/share-offsite?url=${encodeURIComponent(currentPath)}&title=${encodeURIComponent(frontmatter.title || '')}`
    },
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(currentPath)}`
    },
  ]
  
  return (
    <LayoutContent
      sharingLinks={sharingLinks}
      currentPath={currentPath}
      frontmatter={frontmatter}
      serialized={serialized}
    >
      {children}
    </LayoutContent>
  )
}