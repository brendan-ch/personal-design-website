'use client'

import { usePathname } from "next/navigation"
import { useEffect } from "react"

/**
 * Client component which scrolls the window to the top
 * on pathname change.
 * @returns
 */
export default function ScrollControl() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return <></>
}