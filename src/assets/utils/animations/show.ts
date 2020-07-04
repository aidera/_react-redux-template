import anime from "animejs";

const show = (target: HTMLDivElement | null, cb?: () => void) => {
  if (target) target.style.display = "block";
  anime({
    targets: target,
    keyframes: [{ opacity: 0 }, { opacity: 1 }],
    duration: 300,
    easing: "linear",
    loop: false,
    complete: () => {
      if (cb) cb();
    },
  });
};

export default show;
