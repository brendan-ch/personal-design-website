'use client'

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import styles from './MDXContent.module.css'
import Image from "next/image"
import { ImageSize } from "./getWork"
import generateHeadingLink from "@/helpers/generateHeadingLink"

interface MDXContentProps {
  source: MDXRemoteSerializeResult,
  imageSizes: ImageSize[],
}

const Nothing = () => <></>

/**
 * Content renderer for the Work page.
 * Unlike `MDXSidebar`, renders image content instead of headings.
 * @param param0
 * @returns
*/
export default function MDXContent({ source, imageSizes }: MDXContentProps) {
  /**
   * Map of MDX components which map to React components.
   */
  const MDXComponents = {
    img: (props: React.HTMLProps<HTMLImageElement>) => {
      if (!props.src || !props.alt) {
        return <></>
      }

      const dimensions = imageSizes.find(({ imagePath }) => imagePath === props.src)

      return (
        <div className={styles.imageContainer} style={{
          aspectRatio: dimensions ? `${dimensions.width} / ${dimensions.height}` : '3 / 2'
        }}>
          <Image src={props.src} alt={props.alt} fill />
        </div>
      )
    },
    h1: (props: React.HTMLProps<HTMLHeadingElement>) => {
      const generatedLink = generateHeadingLink(props.children as string)

      // Return empty div which can be referred to by ID
      return <div id={generatedLink}></div>
    },
    h2: Nothing,
    h3: Nothing,
  }

  return <MDXRemote {...source} components={MDXComponents} />
}