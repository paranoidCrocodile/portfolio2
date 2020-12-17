function $(elem: string): unknown {
  return document.querySelector(elem) as unknown;
}

function toggleSVGThemeColor(selectors: string[], theme: ThemeObj): void {
  const { main } = theme;
  selectors.map(
    (selector) => (($(selector) as DOMSVGElement).style.fill = main)
  );
}

export { $, toggleSVGThemeColor };
