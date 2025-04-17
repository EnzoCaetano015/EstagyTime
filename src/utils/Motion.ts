export const fadeInVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

export const slideInVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export const fadeJumpVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: [0.8, 1.1, 1],
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

export const sobeDesceVariant = {
  initial: { y: 0 },
  animate: {
    y: [0, 15, 0],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export const dotBounceVariant = {
  hidden: {
    scale: 0.8,
    backgroundColor: "#ccc",
  },
  visible: (i: number) => ({
    scale: [0.8, 1.2, 0.8],
    backgroundColor: ["#ccc", "#422680", "#ccc"],
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      times: [0, 0.4, 0.8],
      repeat: Infinity,
      delay: i * 0.2,
    },
  }),
};

export const dotsContainerVariant = {
  hidden: {},
  visible: {
    transition: {},
  },
};