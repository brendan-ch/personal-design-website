import fs from 'fs/promises'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

/**
 * Frontmatter used for the document page.
 */
interface Frontmatter {
  title: string,
  lastUpdated: string,
  description: string,
}

interface Document<T> {
  frontmatter: T,
  serialized: MDXRemoteSerializeResult,
}

/**
 * Retrieve markdown data from the content folder.
 * @param id ID of the given page.
 */
async function getDocument(id: string): Promise<Document<Frontmatter>> {
  const filePath = path.join(process.cwd(), 'src', 'content', 'document', `${id}.mdx`)
  const raw = await fs.readFile(filePath, 'utf-8')

  // Serialize the MDX content and parse the frontmatter
  const serialized = await serialize(raw, {
    parseFrontmatter: true,
  })

  const frontmatter = serialized.frontmatter as unknown as Frontmatter

  return {
    frontmatter,
    serialized,
  }
}

export const dynamicParams = false

export async function generateStaticParams() {
  // Fetch content from folder
  const files = await fs.readdir(path.join(process.cwd(), 'src', 'content', 'document'))

  // Return relevant IDs so they can be prerendered
  return files.map((file) => ({
    id: file.split('.')[0],
  }))
}

interface Props {
  params: {
    id: string,
  },
}

export default async function Document({ params }: Props) {
  const { frontmatter, serialized } = await getDocument(params.id)

  return (
    <main>
      {/* Desktop sidebar */}

      <p>This is the document page</p>
    </main>
  )
}