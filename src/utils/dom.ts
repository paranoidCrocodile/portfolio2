const $ = (elem: string): Node => document.querySelector(elem) as Node;

const $$ = (elems: string): NodeListOf<Node> =>
  document.querySelectorAll(elems);

const multi$ = (prefix = "", elems: string[], combinator = ""): unknown[] => [
  ...elems.map((elem) => $(`${prefix}${combinator}${elem}`)),
];

const domExport = { $, $$, multi$ };

export default domExport;
