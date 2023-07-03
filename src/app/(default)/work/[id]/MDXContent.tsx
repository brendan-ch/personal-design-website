import styles from './MDXContent.module.css'
import Image from "next/image"
import generateHeadingLink from "@/helpers/generateHeadingLink"
import EmbedFrame from "./EmbedFrame"
import getPrecompiledWork from "./getPrecompiledWork"
import { compileMDX } from "next-mdx-remote/rsc"
import remarkUnwrapImages from 'remark-unwrap-images'

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
   */
  const MDXComponents = {
    img: (props: React.HTMLProps<HTMLImageElement>) => {
      if (!props.src || !props.alt) {
        return <></>
      }

      const dimensions = imageSizes.find(({ imagePath }) => imagePath === props.src)

      return (
        <div className={styles.imageContainer} style={{
          aspectRatio: dimensions ? `${dimensions.width} / ${dimensions.height}` : '3 / 2'
        }}>
          <Image src={props.src} alt={props.alt} fill />
        </div>
      )
    },
    h1: (props: React.HTMLProps<HTMLHeadingElement>) => {
      const generatedLink = generateHeadingLink(props.children as string)

      // Return empty div which can be referred to by ID
      return <div id={generatedLink} className="anchorWrapper"></div>
    },
    h2: Nothing,
    h3: Nothing,
    EmbedFrame: EmbedFrame,
  }

  const { content } = await compileMDX({
    source: raw,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkUnwrapImages]
      },
    },
    components: MDXComponents,
  })
  
  return <>
    {content}
  </>
}