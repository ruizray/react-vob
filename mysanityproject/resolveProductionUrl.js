export default function resolveProductionUrl(document) {
    return `http://localhost:3000/preview/${document.slug.current}`
  }