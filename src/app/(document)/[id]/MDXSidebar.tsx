'use client'

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import utils from '../../utils.module.css'
import { useEffect, useState } from "react"
import generateHeadingLink from "@/helpers/generateHeadingLink"
import useScrollHighlight from "@/hooks/useScrollHighlight"

interface MDXContentProps {
  source: MDXRemoteSerializeResult,
}

/**
 * Offset from the viewport's top for a link to be highlighted.
 */
const HIGHLIGHT_TOP_MARGIN = 320

const Nothing = () => <></>

/**
 * Sidebar renderer for the document page.
 * @param param0
 * @returns
*/
export default function MDXSidebar({ source }: MDXContentProps) {
  const highlighted = useScrollHighlight('anchorWrapper', HIGHLIGHT_TOP_MARGIN)

  /**
   * Map of MDX components which map to React components.
   */
  const MDXComponents = {
    h1: (props: React.HTMLProps<HTMLHeadingElement>) => {
      const generatedLink = generateHeadingLink(props.children as string)
  
      return (
        <a
          href={`#${generatedLink}`}
          className={`${utils.monoText} ${utils.smallText}`}
        >
          {highlighted === generatedLink ? (
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