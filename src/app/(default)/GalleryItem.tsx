import Image from "next/image"
import { ImageSize } from "./work/[id]/getWork"
import styles from './GalleryItem.module.css'
import utils from '../utils.module.css'

interface Props {
  imageSrc: string,
  imageSize: ImageSize,
  imageAlt: string,
  title: string,
  date: string,
  description?: string,
}

export default function GalleryItem({
  imageSrc,
  imageSize,
  imageAlt,
  title,
  date,
  description,
}: Props) {
  return (
    <div className={styles.container}>
      {/* Hover information */}
      <div className={styles.hoverContentWrapper}>
        <div className={styles.headingWrapper}>
          <h1>
            <b>
              {title}
            </b>
          </h1>
          <p className={utils.monoText}>{date}</p>
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
    </div>
  ) 
}