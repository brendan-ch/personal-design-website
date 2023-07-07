# design.bchen.dev

My personal portfolio website for design works, built using [Next.js](https://nextjs.org/).

[Visit the live website](https://design.bchen.dev)

## Getting Started

You must have Node.js 18 installed.

Clone the repository and run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Copyright and Licensing

I, Brendan Chen, reserve full copyright for content under the `/src/content` and `/public/static` folders of the website. This includes, but is not limited to, Markdown (`.mdx`) and image content.

The rest of the project is licensed under the MIT license.

Visit the [open source licenses](https://design.bchen.dev/open-source-licenses) page for information about projects used on this website.

## Creating Content

This website uses MDX via [`next-mdx-remote`](https://github.com/hashicorp/next-mdx-remote) for content rendering. All content lives under the `/src/content` folder, and static content under the `/public/static` folder.

Content under `/src/content/work` are rendered as projects under the path `/work/[project-name]` ([see an example](https://design.bchen.dev/work/cmes-admin-panel)). Content under `/src/content/document` are rendered under the path `/[document-name]` ([see an example](https://design.bchen.dev/privacy)).

Run `npm run generate` to generate image dimensions for newly added images in MDX files. This is only necessary if content is changed when the development server is running.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.