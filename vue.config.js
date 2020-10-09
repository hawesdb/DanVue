module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/fonts/fonts.scss";
        `
      }
    }
  }
}