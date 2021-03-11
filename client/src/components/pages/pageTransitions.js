const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.25,
    },
  },
  exit: {
    opacity: 0,
    x: '-100vh',
    transition: {
      duration: 0.25,
    },
  },
};
export default containerVariants;
