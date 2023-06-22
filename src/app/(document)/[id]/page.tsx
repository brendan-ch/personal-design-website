import fs from 'fs/promises'
import path from 'path'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { cache } from 'react'
import utils from '../../utils.module.css'
import MDXContent from './MDXContent'

/**
 * Frontmatter used for the document page.
 */
export interface Frontmatter {
  title: string,
  lastUpdated: string,
  description: string,
}

export interface Document<T> {
  frontmatter: T,
  serialized: MDXRemoteSerializeResult,
}

/**
 * Retrieve markdown data from the content folder.
 * Results from this function are cached and deduplicated; the same call
 * twice will return the cached result.
 * @param id ID of the given page.
 */
export const getDocument = cache(async (id: string): Promise<Document<Frontmatter>> => {
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
})

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

      <h1 className={utils.h0Text}>{frontmatter.title}</h1>
      <MDXContent source={serialized} />
    </main>
  )
}