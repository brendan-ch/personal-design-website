import path from 'path'
import fs from 'fs/promises'
import { cache } from "react"
import { compileMDX } from 'next-mdx-remote/rsc'
import { Frontmatter, ImageSize } from './getWork'

type Components = {
  [key: string]: any,
}

/**
 * Raw data and image size data for a work.
 */
export interface PrecompiledWork<T> {
  /**
   * Raw string containing frontmatter and markdown.
   */
  raw: string,

  /**
   * 
   */
  content: React.ReactNode,

  /**
   * Object containing the frontmatter of the work.
   */
  frontmatter: T,

  /**
   * Array of image sizes corresponding to the raw content.
   */
  imageSizes: ImageSize[],
  /**
   * Image size for the preview image in frontmatter.
   */
  previewImageSize: ImageSize,
}

const getFile = cache(async (id: string) => {
  const filePath = path.join(process.cwd(), 'src', 'content', 'work', `${id}.mdx`)
  const raw = await fs.readFile(filePath, 'utf-8')

  return raw
})

/**
 * Retrieve raw data from the content folder, as well as image data.
 * Results from this function are cached and deduplicated; the same call
 * twice will return the cached result.
 * @param id ID of the given page.
 */
const getPrecompiledWork = cache(async (id: string, components?: Components): Promise<PrecompiledWork<Frontmatter>> => {
  const raw = await getFile(id)

  // Serialize the MDX content and parse the frontmatter
  const compiled = await compileMDX({
    source: raw,
    options: {
      parseFrontmatter: true,
    },
    components,
  })

  const frontmatter = compiled.frontmatter as unknown as Frontmatter
  if (!frontmatter.previewImage) {
    throw new Error('No preview image provided')
  }

  const parsedImageSizeData = require('../../../../scripts/output/data.json')
  const { allImages, previewImageSize } = parsedImageSizeData.work.find((item: any) => item.id === id)

  return {
    content: compiled.content,
    frontmatter,
    imageSizes: allImages ? allImages : [],
    previewImageSize,
    raw,
  }
})

export default getPrecompiledWork