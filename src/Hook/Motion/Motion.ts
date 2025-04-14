// variants.ts
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
  visible:{opacity: 1, y: 0, transition: {duration: 0.6,  ease: "easeOut"} }
}
