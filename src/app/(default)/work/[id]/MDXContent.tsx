import styles from './MDXContent.module.css'
import Image from "next/image"
import generateHeadingLink from "@/helpers/generateHeadingLink"
import EmbedFrame from "./mdx/EmbedFrame"
import HorizontalWrapper from './mdx/HorizontalWrapper'
import getPrecompiledWork from "./getPrecompiledWork"
import { compileMDX } from "next-mdx-remote/rsc"
import remarkUnwrapImages from 'remark-unwrap-images'
import generatePlaceholder from '@/helpers/generatePlaceholder'
import React from 'react'
import DesktopOnlyWrapper from './mdx/DesktopOnlyWrapper'

interface MDXContentProps {
  id: string,
}

const Nothing = () => <></>

/**
 * Content renderer for the Work page.
 * Unlike `MDXSidebar`, renders image content instead of headings.
 * @param param0
 * @returns
*/
export default async function MDXContent({ id }: MDXContentProps) {
  const { raw, imageSizes } = await getPrecompiledWork(id)

  /**
   * Map of MDX components which map to React components.
   * Displayed as the primary content for the work page.
   */
  const MDXComponents = {
    p: (props: React.HTMLProps<HTMLParagraphElement>) => (
      <p className={styles.paragraph} {...props} />
    ),
    img: async (props: React.HTMLProps<HTMLImageElement>) => {
      if (!props.src || !props.alt) {
        return <></>
      }

      const index = imageSizes.findIndex(({ imagePath }) => imagePath === props.src)
      const dimensions = imageSizes[index]
      const { css } = await generatePlaceholder(props.src, 'work', id)

      return (
        <div className={styles.imageContainer} style={{
          aspectRatio: dimensions ? `${dimensions.width} / ${dimensions.height}` : '3 / 2'
        }}>
          <div className={styles.imagePlaceholder} style={css}></div>
          <Image
            src={props.src}
            alt={props.alt}
            fill
            priority={index === 0}
          />
        </div>
      )
    },
    h1: (props: React.HTMLProps<HTMLHeadingElement>) => {
      const generatedLink = generateHeadingLink(props.children as string)

      // Return empty div which can be referred to by ID
      return <>
        <div className={styles.anchorWrapper}></div>
        <div id={generatedLink} className="anchorWrapper"></div>
      </>
    },
    h2: Nothing,
    h3: Nothing,
    EmbedFrame,
    HorizontalWrapper,
    DesktopOnlyWrapper,
    blockquote: (props: React.HTMLProps<HTMLQuoteElement>) => {
      return (
        <blockquote className={styles.blockquote}>
          {props.children}
        </blockquote>
      )
    },
    a: (props: React.HTMLProps<HTMLAnchorElement>) => (
      <a target="_blank" rel="noreferrer" className={styles.anchor} {...props}>
      </a>
    ),
    ol: (props: React.HTMLProps<HTMLOListElement>) => (
      <ol className={`${styles.list} ${styles.orderedList}`}>
        {props.children}
      </ol>
    ),
    ul: (props: React.HTMLProps<HTMLUListElement>) => (
      <ul className={styles.list}>
        {props.children}
      </ul>
    ),
  }

  const { content } = await compileMDX({
    source: raw,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkUnwrapImages]
      },
    },
    // @ts-ignore MDXComponents may contain server components with `async`
    components: MDXComponents,
  })

  return <>
    {content}
  </>
}