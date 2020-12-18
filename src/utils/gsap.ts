const animateEach = ({ elems, fromTos, tweenFunc }: AnimationObject): void =>
  elems.forEach((elem, i) =>
    tweenFunc(elem, ...(fromTos.length == 1 ? fromTos[0] : fromTos[i]))
  );

const gsapExport = { animateEach };

export default gsapExport;
