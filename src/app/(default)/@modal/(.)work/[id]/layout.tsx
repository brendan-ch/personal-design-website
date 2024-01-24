import LayoutContent from "@/app/(default)/work/[id]/LayoutContent"

interface LayoutProps {
  params: {
    id: string,
  },
  children: React.ReactNode,
}

/**
 * Layout rendered when the route is intercepted
 * (i.e. when the user clicks on a project from the home page)
 * @param param0
 * @returns
 */
export default async function WorkLayout({ children, params }: LayoutProps) {
  return (
    // @ts-ignore Server Component
    <LayoutContent
      id={params.id}
      goBackOnExit
    >
      {children}
    </LayoutContent>
  )
}