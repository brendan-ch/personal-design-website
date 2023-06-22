'use client'

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import utils from '../../utils.module.css'

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
      <a href={`#${generatedLink}`} className={`${utils.monoText} ${utils.smallText}`}>
        {props.children}
      </a>
    )
  },
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