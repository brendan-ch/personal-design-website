'use client'

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import utils from '../../utils.module.css'
import { useEffect, useState } from "react"

interface MDXContentProps {
  source: MDXRemoteSerializeResult,
}

/**
 * Offset from the viewport's top for a link to be highlighted.
 */
const HIGHLIGHT_TOP_MARGIN = 48

const Nothing = () => <></>

/**
 * Sidebar renderer for the document page.
 * @param param0
 * @returns
*/
export default function MDXSidebar({ source }: MDXContentProps) {
  const [highlighted, setHighlighted] = useState<string | undefined>(undefined)

  // Listen to scroll events
  useEffect(() => {
    function handleSetHighlighted() {
      // Get each heading link on the page
      const links = document.getElementsByClassName('anchorWrapper')
      let linkToHighlight = links.item(0)
      let previousTop = linkToHighlight?.getBoundingClientRect()?.top

      // For each link, check which one is closest to the top of the viewport
      for (let i = 1; i < links.length; i += 1) {
        const link = links.item(i)
        const rect = link?.getBoundingClientRect()

        const top = rect?.top
        // if top is less than or equal to previous element's,
        // update the highlighted link
        if (previousTop !== undefined && top !== undefined && top <= HIGHLIGHT_TOP_MARGIN) {
          previousTop = top
          linkToHighlight = link
        }
      }

      setHighlighted(linkToHighlight?.textContent || undefined)
    }

    window.addEventListener('scrollend', handleSetHighlighted)
    handleSetHighlighted()

    return () => window.removeEventListener('scrollend', handleSetHighlighted)
  }, [])

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
          {highlighted === props.children ? (
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