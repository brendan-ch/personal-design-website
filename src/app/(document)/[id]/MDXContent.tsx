'use client'

import Anchor from "@/common/Anchor"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import styles from './MDXContent.module.css'

interface MDXContentProps {
  source: MDXRemoteSerializeResult,
}

/**
 * Map of MDX components which map to React components.
 */
const MDXComponents = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <Anchor
      text={`${props.children}`}
    />
  ),
  p: (props: React.HTMLProps<HTMLParagraphElement>) => (
    <p className={styles.text} {...props}></p>
  )
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