'use client'

import Anchor from "@/common/Anchor"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import styles from './MDXContent.module.css'
import { BACKGROUND, WHITE } from "@/app/Constants"
import Image from "next/image"
import generateHeadingLink from "@/helpers/generateHeadingLink"

interface MDXContentProps {
  source: MDXRemoteSerializeResult,
}

/**
 * Map of MDX components which map to React components.
 */
const MDXComponents = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => {
    const generatedLink = generateHeadingLink(props.children as string)

    return (
      <div className={styles.anchorLinkWrapper}>
        {/* anchorWrapper is required for heading links to work
        in a performant manner */}
        {/* see useEffect hook in MDXSidebar component */}
        <div className={`${styles.anchorWrapper} anchorWrapper`} id={generatedLink}>
          <Anchor
            text={`${props.children}`}
            // id={generatedLink}
            style={{
              borderTopColor: BACKGROUND,
            }}
          />
        </div>
      </div>
    )
  },
  p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p className={styles.text} {...props}></p>
  ),
  ol: (props: React.HTMLProps<HTMLOListElement>) => (
    <ol className={`${styles.list} ${styles.orderedList}`}>
      {props.children}
    </ol>
  ),
  ul: (props: React.HTMLProps<HTMLUListElement>) => (
    <ul className={styles.list}>
      {props.children}
    </ul>
  ),
  pre: (props: React.HTMLProps<HTMLPreElement>) => (
    <pre className={styles.pre} {...props}>
    </pre>
  ),
  img: (props: React.HTMLProps<HTMLImageElement>) => props.src && props.alt ? (
    <div className={styles.imageContainer}>
      <Image src={props.src} alt={props.alt} fill />
    </div>
  ) : <></>,
}

/**
 * Content renderer for the Document page.
 * Unlike `MDXSidebar`, renders actual content instead of just headings.
 * @param param0
 * @returns
 */
export default function MDXContent({ source }: MDXContentProps) {
  return <MDXRemote {...source} components={MDXComponents} lazy />
}