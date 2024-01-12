'use client'

import { MDXRemoteSerializeResult } from "next-mdx-remote/rsc"
import utils from '../../utils.module.css'
import generateHeadingLink from "@/helpers/generateHeadingLink"
import { MDXRemote } from "next-mdx-remote"
import useScrollHighlight from "@/hooks/useScrollHighlight"
import { useEffect } from "react"

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

  // Force a local refresh when the page hash changes
  // If the hash is empty, scroll to the top of the page instead of performing
  // a local refresh (may take a long time)
  // See https://stackoverflow.com/questions/57656284/browser-scrolling-to-previous-position-instead-of-anchors-when-navigating-back
  useEffect(() => {
    window.onhashchange = function() {
      if (window.location.hash === '' || window.location.hash === '#') {
        window.scrollTo(0, 0)
      } else {
        window.location.href = window.location.href
      }
    }

    return () => {
      window.onhashchange = () => {}
    }
  }, [])
    
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
          {/* {props.children} */}
        </a>
      )
    },
    p: Nothing,
    a: Nothing,
    ul: Nothing,
    ol: Nothing,
    pre: Nothing,
    img: Nothing,
    hr: Nothing,
    EmbedFrame: Nothing,
    HorizontalWrapper: Nothing,
    blockquote: Nothing,
  }

  return <MDXRemote components={MDXComponents} {...source} />
}