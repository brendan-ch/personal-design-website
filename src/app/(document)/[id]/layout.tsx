interface Props {
  params: {
    id: string,
  },
}

export default async function DocumentLayout({ params }: Props) {
  return (
    // Get MDX content here and pass it down to sidebar
    // Render children as well
    <div>
      <div>
        <a href="/">Back to Home</a>

        {/* to-do: pass content */}
        {/* <MDXSidebar /> */}
      </div>
    </div>
  )
}