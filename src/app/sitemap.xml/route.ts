import { NextRequest, NextResponse } from "next/server";
import path from 'path'
import fs from 'fs/promises'

/**
 * Retrieve all available IDs in the works folder.
 * @returns
 */
async function getWorkIds() {
  // const filePath = path.join(process.cwd(), 'src', 'content', 'work')
  // const ids = await fs.readdir(filePath)

  const parsed = require('../../scripts/output/data.json')
  return parsed.work.map((value: any) => value.id) as string[]

  // return ids.map((id) => id.split('.mdx')[0])
}

/**
 * Retrieve all available IDs in the documents folder.
 * @returns
 */
async function getDocumentIds() {
  // const filePath = path.join(process.cwd(), 'src', 'content', 'document')
  // const ids = await fs.readdir(filePath)
  // return ids.map((id) => id.split('.mdx')[0])

  const parsed = require('../../scripts/output/data.json')
  return parsed.document.map((value: any) => value.id) as string[]
}

export async function GET(req: NextRequest) {
  const baseUrl = `https://${req.headers.get('host')}`
  // console.log(baseUrl)

  const workPages = await getWorkIds()
  const docPages = await getDocumentIds()
  // console.log(workPages)
  // console.log(docPages)

  const highPriority = [
    '',
  ]

  // Generate the sitemap here
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${highPriority.map((value) => {
      return `<url>
        <loc>${baseUrl}${value}</loc>
        <priority>1.0</priority>
      </url>`;
    }).join('')}
    ${workPages.map((value) => {
      return `<url>
        <loc>${baseUrl}/work/${value}</loc>
        <priority>0.5</priority>
      </url>`;
    }).join('')}
    ${docPages.map((value) => {
      return `<url>
        <loc>${baseUrl}/${value}</loc>
        <priority>0.25</priority>
      </url>`;
    }).join('')}
  </urlset>`
  // console.log(sitemap)

  const text = new NextResponse(sitemap)
  text.headers.set('Content-Type', 'application/xml')
  // console.log(text)

  return text
}