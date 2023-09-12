'use client'

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react"

interface Props {
  className: string,
  renderIfPresent: boolean,
  children: React.ReactNode,
}

/**
 * Control the rendering of a component based on the presence
 * of a class name in the DOM tree.
 * @param param0
 * @returns
 */
export default function RenderControl({ className, renderIfPresent, children }: Props) {
  const [present, setPresent] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Check if the class name is present within the window
    const elements = document.getElementsByClassName(className)

    // Set state accordingly
    setPresent(elements.length > 0)
  }, [className, renderIfPresent, pathname])

  if ((renderIfPresent && present) || (!renderIfPresent && !present)) {
    return <>{children}</>
  } else {
    return <></>
  }
}