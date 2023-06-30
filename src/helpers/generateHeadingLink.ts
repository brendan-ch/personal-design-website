/**
 * Given the text of a heading, generate a link which can be used
 * as an ID for the heading.
 * @param text
 * @returns
 */
function generateHeadingLink(text: string) {
  const generatedLink = (text)
    .toLowerCase()
    .replaceAll(/[^A-Za-z0-9 ]/gi, '')
    .replaceAll(' ', '-')

  return generatedLink
}

export default generateHeadingLink