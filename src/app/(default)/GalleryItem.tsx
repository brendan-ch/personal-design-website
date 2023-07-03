import path from 'path'
import fs from 'fs/promises'
import Image from "next/image"
import { getPlaiceholder } from "plaiceholder"
import { ImageSize } from "./work/[id]/getWork"
import styles from './GalleryItem.module.css'
import utils from '../utils.module.css'
import Link from "next/link"

interface Props {
  imageSrc: string,
  imageSize: ImageSize,
  imageAlt: string,
  title: string,
  date: string,
  description: string,
  href: string,
}

export default async function GalleryItem({
  imageSrc,
  imageSize,
  imageAlt,
  title,
  date,
  description,
  href,
}: Props) {
  let base64: string;

  const plaiceholderConfig = {
    size: 16,
  }

  if (imageSrc.startsWith('/')) {
    // Image inside `/public` folder
    const file = await fs.readFile(path.join(process.cwd(), 'public', imageSrc))
    const placeholder = await getPlaiceholder(file, plaiceholderConfig)
    base64 = placeholder.base64
  } else {
    // Remote image
    const buffer = await fetch(imageSrc).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    )

    const placeholder = await getPlaiceholder(buffer, plaiceholderConfig)
    base64 = placeholder.base64
  }

  return (
    <Link className={styles.container} href={href}>
      {/* Hover information */}
      <div className={styles.hoverContentWrapper}>
        <div className={styles.headingWrapper}>
          <h1>
            <b>
              {title}
            </b>
          </h1>
          <p className={`${utils.monoText} ${utils.smallText}`}>{date}</p>
        </div>
        <p>{description}</p>
      </div>
      {/* Image container */}
      <div className={styles.imageContainer} style={{
        aspectRatio: `${imageSize.width} / ${imageSize.height}`,
      }}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={styles.image}
          placeholder="blur"
          blurDataURL={base64}
        />
      </div>
      <div className={styles.mobileContentWrapper}>
        <h2>
          <b>
            {title}
          </b>
        </h2>
        <p className={`${utils.monoText} ${utils.smallText}`}>{date}</p>
      </div>
    </Link>
  )
}