'use client'

import { usePathname } from "next/navigation"

interface Props {
  children: React.ReactNode,
}

// Issue with this approach: work content is rendered within children
// when not intercepted
// So this would render a blank page
export default function LayoutControl({ children }: Props) {
  const pathname = usePathname()

  return <>
    {pathname?.includes('/work') ? undefined : children}
  </>
}