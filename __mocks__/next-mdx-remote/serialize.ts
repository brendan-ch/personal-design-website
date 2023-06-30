export async function serialize() {
  return {
    frontmatter: {
      title: 'Test Title',
      description: 'Test Description',
      previewImage: 'capybara.png',
      date: '2023.05.30',
    },
    compiledSource: '',
    scope: '',
  }
}
