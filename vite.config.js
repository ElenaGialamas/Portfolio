export default {
  build: {
    rollupOptions: {
      external: ["GSAP/ScrollTrigger.js"],
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
};
