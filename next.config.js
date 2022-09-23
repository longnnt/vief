const path = require("path");
const i18n = require("./i18n.json");

module.exports = {
  trailingSlash: true,
  poweredByHeader: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "assets/styles")],
  },
  i18n,
};
