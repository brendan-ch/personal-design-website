// export function getStaticParams() {
//   // Fetch content from folder


//   // Return relevant IDs so they can be prerendered

// }

interface Props {
  params: {
    id: string,
  },
}

export default function Document({ params }: Props) {
  return (
    <main>
      {/* Desktop sidebar */}

      <p>This is the document page</p>
    </main>
  )
}