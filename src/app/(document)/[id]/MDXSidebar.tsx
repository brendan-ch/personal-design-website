'use client'

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import utils from '../../utils.module.css'

interface MDXContentProps {
  source: MDXRemoteSerializeResult,
}

const Nothing = () => <></>

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
  p: Nothing,
  a: Nothing,
  ul: Nothing,
  ol: Nothing,
}

/**
 * Sidebar renderer for the document page.
 * @param param0
 * @returns
 */
export default function MDXSidebar({ source }: MDXContentProps) {
  return <MDXRemote {...source} components={MDXComponents} />
}