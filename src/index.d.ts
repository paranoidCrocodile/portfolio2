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

type Obj = Record<string, unknown>;

interface AnimationObject {
  elems: DOMSVGElement[];
  fromTos: [gsap.TweenVars, gsap.TweenVars?][];
  tweenFunc: function;
  yoyo: boolean;
  repeat: number;
}

interface AnimationCompProps extends ComponentProps {
  duration: number;
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

type mixinsExportObj = Record<string, string>;

interface utilObj {
  gsap: gsapExportObj;
  dom: domExportObj;
  mixins: mixinsExportObj;
}

interface ComponentProps {
  children: React.ReactNode;
  className?: string;
}
