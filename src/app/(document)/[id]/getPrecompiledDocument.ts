import path from 'path'
import fs from 'fs/promises'
import { cache } from "react"

/**
 * Raw data and image size data for a work.
 */
export interface PrecompiledDocument {
  /**
   * Raw string containing frontmatter and markdown.
   */
  raw: string,
}

/**
 * Retrieve raw data from the content folder, as well as image data.
 * Results from this function are cached and deduplicated; the same call
 * twice will return the cached result.
 * @param id ID of the given page.
 */
const getPrecompiledDocument = cache(async (id: string): Promise<PrecompiledDocument> => {
  const filePath = path.join(process.cwd(), 'src', 'content', 'document', `${id}.mdx`)
  const raw = await fs.readFile(filePath, 'utf-8')

  return {
    raw,
  }
})

export default getPrecompiledDocument