import LayoutContent from "@/app/(default)/work/[id]/LayoutContent"

interface LayoutProps {
  params: {
    id: string,
  },
  children: React.ReactNode,
}

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