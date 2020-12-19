const animateEach = ({
  elems,
  fromTos,
  tweenFunc,
  yoyo,
  repeat,
}: AnimationObject): void =>
  elems.forEach((elem: unknown, i: number) =>
    tweenFunc(elem, ...(fromTos.length == 1 ? fromTos[0] : fromTos[i]))
      .yoyo(yoyo)
      .repeat(repeat)
  );

const random = (min: number, max: number): number =>
  Math.random() * (max - min) + min;

const gsapExport = { animateEach, random };

export default gsapExport;
