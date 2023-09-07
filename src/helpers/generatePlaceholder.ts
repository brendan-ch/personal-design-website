import { GetPlaiceholderReturn } from "plaiceholder"

const defaultConfig = {
  size: 16,
}

/**
 * Get a placeholder for a statically hosted image.
 * 
 * The function relies on `/scripts/outputs/data.json` for data about the statically
 * hosted images. This approach avoids issues with output file tracing
 * including the `/public` folder.
 * 
 * Should only be used on the server side.
 * @param imageSrc The image source.
 * @param prefix Indicates the prefix of the document to search.
 * @param id The ID of the document.
 */
export default async function generatePlaceholder(imageSrc: string, prefix: 'work' | 'document', id: string): Promise<GetPlaiceholderReturn> {
  const plaiceholderConfig = defaultConfig

  // Image inside `/public` folder
  // Use data.json file
  const parsed = require('../scripts/output/data.json')

  // Find the matching image src
  const work = parsed[prefix].find((item: any) => item.id === id);
  if (!work) {
    throw new Error(`Placeholder lookup failed; unable to find item with prefix ${prefix} and ID ${id}.`)
  }

  const image = work.allImages.find((image: any) => image.imagePath === imageSrc);
  if (!image) {
    throw new Error(`Placeholder lookup failed; unable to find image with src ${imageSrc}, prefix ${prefix} and ID ${id}`)
  }

  return image.placeholder;
}