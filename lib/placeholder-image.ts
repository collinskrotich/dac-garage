/**
 * TEMP: Generates topic-relevant stock photo URLs via loremflickr.com to stand in for
 * missing brand photography. Deterministic per `lock` so the same placeholder renders
 * every time. Replace every call site with a real photo once available.
 */
export function placeholderImage(tags: string[], width: number, height: number, lock: number): string {
  return `https://loremflickr.com/${width}/${height}/${tags.map(encodeURIComponent).join(',')}?lock=${lock}`
}
