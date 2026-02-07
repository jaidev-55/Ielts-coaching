/**
 * Smoothly scroll to an element by id or HTMLElement
 * Supports optional offset (useful for sticky headers)
 */
export function scrollToElement(
  target: string | HTMLElement,
  offset = 0,
  behavior: ScrollBehavior = "smooth",
) {
  if (typeof window === "undefined") return;

  const element =
    typeof target === "string" ? document.getElementById(target) : target;

  if (!element) return;

  const top = element.getBoundingClientRect().top + window.pageYOffset - offset;

  window.scrollTo({ top, behavior });
}

/**
 * Scroll a horizontal container by a given offset
 * Positive = right, Negative = left
 */
export function scrollVideoContainer(
  containerId: string,
  offset: number,
  behavior: ScrollBehavior = "smooth",
) {
  if (typeof window === "undefined") return;

  const el = document.getElementById(containerId);
  if (!el) return;

  el.scrollBy({
    left: offset,
    behavior,
  });
}

/**
 * Scroll a horizontal container to a specific item index
 */
export function scrollToVideoIndex(
  containerId: string,
  index: number,
  itemWidth = 300,
  gap = 20,
  behavior: ScrollBehavior = "smooth",
) {
  if (typeof window === "undefined") return;

  const el = document.getElementById(containerId);
  if (!el) return;

  const scrollLeft = index * (itemWidth + gap);

  el.scrollTo({
    left: scrollLeft,
    behavior,
  });
}
