//modules
declare module "*.svg" {
  const content: SVG;
  export default content;
}

//components
interface ComponentProps {
  children: React.ReactNode;
  className?: string;
}

interface AnimationCompProps extends ComponentProps {
  duration: number;
}

//DOM Elements
type SVG = React.ReactElement | AnyStyledComponent;

interface DOMSVGElement
  extends SVGRectElement,
    SVGCircleElement,
    SVGPathElement {}

//generic objects
type Obj = Record<string, unknown>;

interface SVGDataObj {
  SVGID: string;
  colorChangingParts: string[];
  movingParts: string[];
}

interface DevSVGDataObj extends SVGDataObj {
  transformOrigins: string[];
}

interface AnimationObject {
  elems: DOMSVGElement[];
  fromTos: [gsap.TweenVars, gsap.TweenVars?][];
  tweenFunc: function;
  yoyo: boolean;
  repeat: number;
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

interface utilObj {
  gsap: {
    animateEach: (AnimationObj) => void;
  };
  dom: {
    $: (elem: string) => Node;
    $$: (elems: string) => NodeListOf<Node>;
    multi$: (
      prefix: string,
      elems: string[],
      combinator: string[]
    ) => unknown[];
  };
  mixins: Record<string, string>;
}
