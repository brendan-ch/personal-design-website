// @ts-check

// This script generates a JSON file from the content/ directory.
// The file contains information about image aspect ratios

const { readFile, readdir, writeFile, mkdir } = require('fs/promises');
const path = require('path');
// const sizeOf = require('image-size');

/**
 * Read image size data inside the /public/static folder.
 * @returns {Promise<object>}
 */
async function getData() {
  // const { serialize } = await import('next-mdx-remote/serialize');
  // const contentDirectory = path.join(process.cwd(), 'src', 'content');
  // const prefixes = ['work', 'document'];

  return {};
}

/**
 * Write output into a JSON file in the output/ directory.
 * @param {any} data
 */
// async function writeData(data) {
//   // Check for output directory
//   const exists = (await readdir(path.join(process.cwd(), 'src', 'scripts'))).includes('output');
//   if (!exists) {
//     await mkdir(path.join(process.cwd(), 'src', 'scripts', 'output'));
//   }

//   await writeFile(path.join(process.cwd(), 'src', 'scripts', 'output', 'data.json'), JSON.stringify(data));
// }

// getData()
//   .then((value) => {
//     writeData(value);
//   });