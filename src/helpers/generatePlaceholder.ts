import fs from 'fs/promises'
import path from 'path'
import { getPlaiceholder } from "plaiceholder"

const defaultConfig = {
  size: 16,
}

/**
 * Wrapper around the `getPlaiceholder` function
 * which works for both statically hosted images (in the `public` folder)
 * and remote images.
 * 
 * Should only be used on the server side.
 * @param imageSrc The image source.
 * @param size Size passed to plaiceholder. Defaults to `16`.
 */
export default async function generatePlaceholder(imageSrc: string, size?: number) {
  let plaiceholderConfig = size ? {
    size,
  } : defaultConfig

  if (imageSrc.startsWith('/')) {
    // Image inside `/public` folder
    const file = await fs.readFile(path.join(process.cwd(), 'public', imageSrc))
    const placeholder = await getPlaiceholder(file, plaiceholderConfig)
    return placeholder
  }

  // Remote image
  const buffer = await fetch(imageSrc).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  )

  const placeholder = await getPlaiceholder(buffer, plaiceholderConfig)
  return placeholder
}