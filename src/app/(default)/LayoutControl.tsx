'use client'

import { usePathname } from "next/navigation"

interface Props {
  children: React.ReactNode,
}

export default function LayoutControl({ children }: Props) {
  const pathname = usePathname()

  return <>
    {pathname?.includes('/work') ? undefined : children}
  </>
}