type SVG = React.ReactElement | AnyStyledComponent;

declare module "*.svg" {
  const content: SVG;
  export default content;
}

interface DOMSVGElement
  extends SVGRectElement,
    SVGCircleElement,
    SVGPathElement {}

type queriedElement<T> = T | null;

type Obj = Record<string, unknown>;

interface ThemeObj {
  main: string;
  second: string;
  third: string;
  background: string;
  backgroundSecond: string;
  fontLight: string;
  fontDark: string;
  isDark: boolean;
}
