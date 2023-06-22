'use client'

import Anchor from "@/common/Anchor"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import styles from './MDXContent.module.css'
import { BACKGROUND, WHITE } from "@/app/Constants"

interface MDXContentProps {
  source: MDXRemoteSerializeResult,
}

/**
 * Map of MDX components which map to React components.
 */
const MDXComponents = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => {
    const generatedLink = (props.children as string)
      .toLowerCase()
      .replaceAll(/[^A-Za-z0-9 ]/gi, '')
      .replaceAll(' ', '-')

    return (
      <div className={styles.anchorWrapper}>
        <Anchor
          text={`${props.children}`}
          id={generatedLink}
          style={{
            borderTopColor: BACKGROUND,
          }}
        />
      </div>
    )
  },
  p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p className={styles.text} {...props}></p>
  ),
  ol: (props: React.HTMLProps<HTMLOListElement>) => (
    <ol className={styles.list}>
      {props.children}
    </ol>
  ),
  ul: (props: React.HTMLProps<HTMLUListElement>) => (
    <ul className={styles.list}>
      {props.children}
    </ul>
  ),
}

/**
 * Content renderer for the Document page.
 * Unlike `MDXSidebar`, renders actual content instead of just headings.
 * @param param0
 * @returns
 */
export default function MDXContent({ source }: MDXContentProps) {
  return <MDXRemote {...source} components={MDXComponents} />
}