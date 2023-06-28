import { useEffect, useState } from "react"

const HIGHLIGHT_TOP_MARGIN_DEFAULT = 48;

/**
 * Hook which returns the heading title the user is currently scrolled to.
 * This allows headings to be highlighted as the user scrolls past.
 * 
 * @param className Class name of scroll elements to check.
 * @param topMargin Margin of the scroll element from the viewport,
 * where the scroll element is considered highlighted.
 */
export default function useScrollHighlight(className: string, topMargin?: number) {
  const [highlighted, setHighlighted] = useState<string | undefined>(undefined)

  let topMarginToCheck: number = HIGHLIGHT_TOP_MARGIN_DEFAULT
  if (topMargin !== undefined) {
    topMarginToCheck = topMargin
  }

  // Listen to scroll events
  useEffect(() => {
    function handleSetHighlighted() {
      // Get each heading link on the page
      const links = document.getElementsByClassName(className)
      let linkToHighlight = links.item(0)
      let previousTop = linkToHighlight?.getBoundingClientRect()?.top

      // For each link, check which one is closest to the top of the viewport
      for (let i = 1; i < links.length; i += 1) {
        const link = links.item(i)
        const rect = link?.getBoundingClientRect()

        const top = rect?.top
        // if top is less than or equal to previous element's,
        // update the highlighted link
        if (previousTop !== undefined && top !== undefined && top <= topMarginToCheck) {
          previousTop = top
          linkToHighlight = link
        }
      }

      setHighlighted(linkToHighlight?.textContent || undefined)
    }

    window.addEventListener('scrollend', handleSetHighlighted)
    handleSetHighlighted()

    return () => window.removeEventListener('scrollend', handleSetHighlighted)
  }, [topMarginToCheck, className])

  return highlighted
}