import { Metadata } from 'next'
import getWorks from './work/[id]/getWorks'
import HomeContent from './HomeContent'

export const metadata: Metadata = {
  title: 'Design by Brendan Chen',
  description: "I'm Brendan, a designer, developer, and college student living in Orange, California. This website is a creative outlet for me to showcase my design works.",
  openGraph: {
    title: 'Design by Brendan Chen',
    description: "I'm Brendan, a designer, developer, and college student living in Orange, California.",
    images: [
      {
        width: 1200,
        height: 630,
        url: '/static/og-featured-works.png'
      },
    ],
  },
}

const column1 = ['cmes-admin-panel', 'clockwise', 'uhs-planner-cover']
const column2 = ['headspace-logo-redesign', 'standard-catalog', 'spirit-week-poster']

const columns = [column1, column2]

export default async function Home() {
  const workColumns = await Promise.all(columns.map(async (column) => {
    return await getWorks(column)
  }))

  return (
    <HomeContent columns={workColumns} headline="Featured Works" />
  )
}
