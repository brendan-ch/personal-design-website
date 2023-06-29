// @ts-check

// This script generates a JSON file from the content/ directory.
// The file contains information about image aspect ratios

const { readFile, readdir, writeFile, mkdir } = require('fs/promises');
const path = require('path');
const sizeOf = require('image-size');

/**
 * Read image size data inside the /public/static folder.
 * @returns {Promise<object>}
 */
async function getData() {
  const contentDirectory = path.join(process.cwd(), 'src', 'content');
  const prefixes = ['work', 'document'];

  let allFiles = {};
  
  await Promise.all(prefixes.map(async (prefix) => {
    // Read all files, and get file data
    let files = await readdir(path.join(contentDirectory, prefix));
    files = files.filter((value) => value.endsWith('.mdx'));

    // Get page data
    const pages = await Promise.all(files.map(async (file) => {
      const content = await readFile(path.join(contentDirectory, prefix, file), 'utf-8');

      // Compile array of images by reading content
      const imagePathRegex = /\/static\/work\/.+\.(png|jpg|jpeg|gif)/g;
      const images = [...content.matchAll(imagePathRegex)].map((matchValue) => matchValue[0]);

      const imageSizes = await Promise.all(images.map(async (imagePath) => {
        // @ts-ignore
        const { width, height } = await sizeOf(path.join('public', imagePath));

        return {
          imagePath,
          width,
          height,
        };
      }));

      return {
        id: file.substring(0, file.indexOf('.mdx')),
        prefix: prefix,
        allImages: imageSizes,
      }
    }));

    allFiles[prefix] = pages;
  }));

  return allFiles;
}

/**
 * Write output into a JSON file in the output/ directory.
 * @param {any} data
 */
async function writeData(data) {
  // Check for output directory
  const exists = (await readdir(path.join(process.cwd(), 'src', 'scripts'))).includes('output');
  if (!exists) {
    await mkdir(path.join(process.cwd(), 'src', 'scripts', 'output'));
  }

  await writeFile(path.join(process.cwd(), 'src', 'scripts', 'output', 'data.json'), JSON.stringify(data));
}

getData()
  .then((value) => {
    writeData(value);
  });