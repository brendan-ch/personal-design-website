'use client'

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import utils from '../../utils.module.css'

interface MDXContentProps {
  source: MDXRemoteSerializeResult,
  /**
   * ID of the heading currently being highlighted.
   */
  highlightedId?: string,
}

const Nothing = () => <></>

/**
 * Sidebar renderer for the document page.
 * @param param0
 * @returns
*/
export default function MDXSidebar({ source, highlightedId }: MDXContentProps) {
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
        <a
          href={`#${generatedLink}`}
          className={`${utils.monoText} ${utils.smallText}`}
        >
          {highlightedId === generatedLink ? (
            <b>
              {props.children}
            </b>
          ) : (
            props.children
          )}
        </a>
      )
    },
    p: Nothing,
    a: Nothing,
    ul: Nothing,
    ol: Nothing,
    pre: Nothing,
    img: Nothing,
  }

  return <MDXRemote {...source} components={MDXComponents} />
}