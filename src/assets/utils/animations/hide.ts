import anime from "animejs";

const hide = (target: HTMLDivElement | null, cb?: () => void) => {
  anime({
    targets: target,
    keyframes: [{ opacity: 1 }, { opacity: 0 }],
    duration: 300,
    easing: "linear",
    loop: false,
    complete: () => {
      if (target) target.style.display = "none";
      if (cb) cb();
    },
  });
};

export default hide;
