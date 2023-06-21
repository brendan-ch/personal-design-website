'use client'

import Anchor from "@/common/Anchor"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"

interface MDXContentProps {
  source: MDXRemoteSerializeResult,
}

/**
 * Map of MDX components which map to React components.
 */
const MDXComponents = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <a href="testing">
      {props.children}
    </a>
  ),
  // TO-DO: make h2 and h3 elements indented links
  p: () => (
    <></>
  ),
  a: () => (
    <></>
  )
}

/**
 * Sidebar renderer for the document page.
 * @param param0
 * @returns
 */
export default function MDXSidebar({ source }: MDXContentProps) {
  return <MDXRemote {...source} components={MDXComponents} />
}