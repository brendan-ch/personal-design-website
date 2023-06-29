import Image from "next/image";
import { ImageSize } from "./work/[id]/getWork";

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
    <div>
      {/* Hover information */}
      <div>

      </div>
      {/* Image container */}
      <div>
        <Image
          src={imageSrc}
          alt={imageAlt}
        />
      </div>
    </div>
  ) 
}