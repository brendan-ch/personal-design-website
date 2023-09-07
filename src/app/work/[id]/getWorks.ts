import { cache } from "react";
import { Work } from "./getWork";
import { Frontmatter } from "./getWork";
import getWork from "./getWork";

/**
 * Retrieve multiple works from the content folder.
 * Results from this function are cached and deduplicated; the same call
 * twice will return the cached result.
 * @param ids Array of IDs to fetch.
 */
const getWorks = cache(async (ids: string[]): Promise<Work<Frontmatter>[]> => {
  const works = await Promise.all(ids.map(async (id) => {
    return await getWork(id)
  }))

  return works
})

export default getWorks