'use client'

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import styles from './MDXContent.module.css'
import Image from "next/image"

interface MDXContentProps {
  source: MDXRemoteSerializeResult,
}

/**
 * Map of MDX components which map to React components.
 */
const MDXComponents = {
  img: (props: React.HTMLProps<HTMLImageElement>) => props.src && props.alt ? (
    <div className={styles.imageContainer}>
      <Image src={props.src} alt={props.alt} fill />
    </div>
  ) : <></>,
}

/**
 * Content renderer for the Work page.
 * Unlike `MDXSidebar`, renders image content instead of headings.
 * @param param0
 * @returns
 */
export default function MDXContent({ source }: MDXContentProps) {
  return <MDXRemote {...source} components={MDXComponents} />
}