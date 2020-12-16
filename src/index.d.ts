//to be expanded
type SVG = React.ReactElement | AnyStyledComponent;

declare module "*.svg" {
  const content: SVG;
  export default content;
}
