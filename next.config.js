const path = require("path");

module.exports = {
  trailingSlash: true,
  poweredByHeader: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "assets/styles")],
  },
  i18n: {
    locales: ["vi", "en"],
    defaultLocale: "vi",
    localeDetection: false,
  },
};
