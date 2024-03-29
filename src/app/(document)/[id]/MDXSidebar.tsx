'use client'

import { MDXRemoteSerializeResult } from "next-mdx-remote/rsc"
import utils from '../../utils.module.css'
import generateHeadingLink from "@/helpers/generateHeadingLink"
import { MDXRemote } from "next-mdx-remote"
import useScrollHighlight from "@/hooks/useScrollHighlight"

interface MDXContentProps {
  source: MDXRemoteSerializeResult,
}

/**
 * Offset from the viewport's top for a link to be highlighted.
 */
const HIGHLIGHT_TOP_MARGIN = 320

/**
 * Component which renders nothing.
 * @returns Nothing.
 * @see https://github.com/kelseyhightower/nocode
 */
const Nothing = () => <></>

/**
 * Sidebar renderer for the document page.
 * @param param0
 * @returns
*/
export default function MDXSidebar({ source }: MDXContentProps) {
  const highlighted = useScrollHighlight('anchorWrapper', HIGHLIGHT_TOP_MARGIN)

  /**
   * Map of MDX components which map to React components,
   * to display for the document page.
   */
  const MDXComponents = {
    h1: (props: React.HTMLProps<HTMLHeadingElement>) => {
      const generatedLink = generateHeadingLink(props.children as string)

      function onClick(e: any) {
        e.preventDefault()
        window.location.replace(`#${generatedLink}`)
      }
  
      return (
        <a
          href={`#${generatedLink}`}
          className={`${utils.monoText} ${utils.smallText}`}
          onClick={onClick}
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
    DesktopOnlyWrapper: Nothing,
    blockquote: Nothing,
  }

  return <MDXRemote components={MDXComponents} {...source} />
}