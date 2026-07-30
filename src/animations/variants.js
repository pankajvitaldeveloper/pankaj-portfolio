export const fadeIn = (direction = "up", delay = 0, duration = 0.6) => {
  const offset = 40;
  const axis = direction === "left" || direction === "right" ? "x" : "y";
  const value = direction === "down" || direction === "right" ? offset : -offset;

  return {
    hidden: { opacity: 0, [axis]: value },
    show: {
      opacity: 1,
      [axis]: 0,
      transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };
};

export const staggerContainer = (stagger = 0.12, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

export const scaleIn = (delay = 0, duration = 0.5) => ({
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration, delay, ease: [0.22, 1, 0.36, 1] } },
});

export const slideIn = (direction = "left", delay = 0, duration = 0.6) => {
  const axis = direction === "left" || direction === "right" ? "x" : "y";
  const value = direction === "right" || direction === "down" ? 80 : -80;
  return {
    hidden: { opacity: 0, [axis]: value },
    show: { opacity: 1, [axis]: 0, transition: { duration, delay, ease: [0.22, 1, 0.36, 1] } },
  };
};
