import path from 'path'
import fs from 'fs/promises'
import { cache } from "react"
import { serialize } from 'next-mdx-remote/serialize'
import { compileMDX } from 'next-mdx-remote/rsc'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import remarkUnwrapImages from 'remark-unwrap-images'

/**
 * Image size as generated by the `generateImageSizes` script.
 */
export interface ImageSize {
  /**
   * Public path to the image.
   */
  imagePath: string,
  /**
   * Width of the image.
   */
  width: string,
  /**
   * Height of the image.
   */
  height: string,
}

/**
 * Frontmatter used for the work/project page.
 */
export interface Frontmatter {
  title: string,
  description: string,
  date: string,
  previewImage: string,
  ogImage?: string,
}

export interface Work<T> {
  frontmatter: T,
  raw: string,
  serialized: MDXRemoteSerializeResult,
  imageSizes: ImageSize[],
  previewImageSize: ImageSize,
  id: string,
}

/**
 * Retrieve markdown data from the content folder.
 * Results from this function are cached and deduplicated; the same call
 * twice will return the cached result.
 * @param id ID of the given page.
 */
const getWork = cache(async (id: string): Promise<Work<Frontmatter>> => {
  const now = Date.now()
  console.log(`getWork            ${id}`)

  const filePath = path.join(process.cwd(), 'src', 'content', 'work', `${id}.mdx`)
  const raw = await fs.readFile(filePath, 'utf-8')

  // Serialize the MDX content and parse the frontmatter
  const serialized = await serialize(raw, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkUnwrapImages]
    },
  })

  const frontmatter = serialized.frontmatter as unknown as Frontmatter
  if (!frontmatter.previewImage) {
    throw new Error('No preview image provided')
  }

  const parsedImageSizeData = require('../../../../scripts/output/data.json')
  const { allImages, previewImageSize } = parsedImageSizeData.work.find((item: any) => item.id === id)

  console.log(`getWork            ${id} after ${Date.now() - now} ms`)

  return {
    frontmatter,
    serialized,
    imageSizes: allImages ? allImages : [],
    previewImageSize,
    raw,
    id,
  }
})

export default getWork