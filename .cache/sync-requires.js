const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---node-modules-gatsby-theme-mdx-deck-src-templates-deck-js": hot(preferDefault(require("/mnt/c/Users/kklum/Documents/programming/portfolio/kklumpp13.github.io/node_modules/gatsby-theme-mdx-deck/src/templates/deck.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/mnt/c/Users/kklum/Documents/programming/portfolio/kklumpp13.github.io/src/pages/index.js"))),
  "component---src-pages-presentations-js": hot(preferDefault(require("/mnt/c/Users/kklum/Documents/programming/portfolio/kklumpp13.github.io/src/pages/presentations.js"))),
  "component---src-pages-contact-mdx": hot(preferDefault(require("/mnt/c/Users/kklum/Documents/programming/portfolio/kklumpp13.github.io/src/pages/contact.mdx")))
}

