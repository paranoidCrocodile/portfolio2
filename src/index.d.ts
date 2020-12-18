type SVG = React.ReactElement | AnyStyledComponent;

declare module "*.svg" {
  const content: SVG;
  export default content;
}

interface DOMSVGElement
  extends SVGRectElement,
    SVGCircleElement,
    SVGPathElement {}

interface SVGDataObj {
  SVGID: string;
  colorChangingParts: string[];
  movingParts: string[];
}

interface DevSVGDataObj extends SVGDataObj {
  transformOrigins: string[];
}

type queriedElement<T> = T | null;

type Obj = Record<string, unknown>;

interface AnimationObject {
  elems: DOMSVGElement[];
  fromTos: [gsap.TweenVars, gsap.TweenVars?][];
  tweenFunc: function;
  yoyo: boolean;
  repeat: number;
}

interface AnimationCompProps {
  duration: number;
  children: React.ReactNode;
}

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

interface domExportObj {
  $: (elem: string) => Node;
  $$: (elems: string) => NodeListOf<Node>;
  multi$: (prefix: string, elems: string[], combinator: string[]) => unknown[];
}

interface gsapExportObj {
  animateEach: (anim: AnimationObj) => void;
}

interface utilObj {
  gsap: gsapExportObj;
  dom: domExportObj;
}
