import path from 'path'
import fs from 'fs/promises'
import { cache } from "react"
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import remarkUnwrapImages from 'remark-unwrap-images'

/**
 * Frontmatter used for the document page.
 */
export interface Frontmatter {
  title: string,
  lastUpdated: string,
  description: string,
  ogImage?: string,
}

export interface Document<T> {
  frontmatter: T,
  serialized: MDXRemoteSerializeResult,
  id: string,
}

/**
 * Retrieve markdown data from the content folder.
 * Results from this function are cached and deduplicated; the same call
 * twice will return the cached result.
 * @param id ID of the given page.
 */
const getDocument = cache(async (id: string): Promise<Document<Frontmatter>> => {
  const filePath = path.join(process.cwd(), 'src', 'content', 'document', `${id}.mdx`)
  const raw = await fs.readFile(filePath, 'utf-8')

  // Serialize the MDX content and parse the frontmatter
  const serialized = await serialize(raw, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkUnwrapImages],
      // See this issue: https://github.com/hashicorp/next-mdx-remote/issues/307#issuecomment-1363415249
      development: process.env.NODE_ENV === 'development',
    },
  })

  const frontmatter = serialized.frontmatter as unknown as Frontmatter

  return {
    frontmatter,
    serialized,
    id,
  }
})

export default getDocument