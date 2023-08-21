import path from 'path'
import fs from 'fs/promises'
import { cache } from "react"
import { compileMDX } from 'next-mdx-remote/rsc'
import { Frontmatter, ImageSize } from './getWork'

/**
 * Raw data and image size data for a work.
 */
export interface PrecompiledWork {
  /**
   * Raw string containing frontmatter and markdown.
   */
  raw: string,
  /**
   * Array of image sizes corresponding to the raw content.
   */
  imageSizes: ImageSize[],
  /**
   * Image size for the preview image in frontmatter.
   */
  previewImageSize: ImageSize,
}

/**
 * Retrieve raw data from the content folder, as well as image data.
 * Results from this function are cached and deduplicated; the same call
 * twice will return the cached result.
 * @param id ID of the given page.
 */
const getPrecompiledWork = cache(async (id: string): Promise<PrecompiledWork> => {
  const now = Date.now()
  console.log(`getPrecompiledWork ${id}`)

  const filePath = path.join(process.cwd(), 'src', 'content', 'work', `${id}.mdx`)
  const raw = await fs.readFile(filePath, 'utf-8')

  // Serialize the MDX content and parse the frontmatter
  const compiled = await compileMDX({
    source: raw,
    options: {
      parseFrontmatter: true,
    },
  })

  const frontmatter = compiled.frontmatter as unknown as Frontmatter
  if (!frontmatter.previewImage) {
    throw new Error('No preview image provided')
  }

  const parsedImageSizeData = require('../../../../scripts/output/data.json')
  const { allImages, previewImageSize } = parsedImageSizeData.work.find((item: any) => item.id === id)

  console.log(`getPrecompiledWork ${id} after ${Date.now() - now} ms`)

  return {
    imageSizes: allImages ? allImages : [],
    previewImageSize,
    raw,
  }
})

export default getPrecompiledWork