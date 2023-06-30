import Image from "next/image"
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

export default function GalleryItem({
  imageSrc,
  imageSize,
  imageAlt,
  title,
  date,
  description,
  href,
}: Props) {
  return (
    <a className={styles.container} href={href}>
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
    </a>
  )
}