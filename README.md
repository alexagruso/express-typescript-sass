# Express + Typescript + Sass

Project template for express apps built with typescript and sass.

## Server side

|        | File Location   | Config Location |
| ------ | --------------- | --------------- |
| Entry  | `src/server.ts` | `package.json`  |
| Output | `dist/`         | `tsconfig.json` |

Default template engine is `ejs` and default view folder is `public/views/`.

## Client side

### Sass

|        | File Location                   | Config Location |
| ------ | ------------------------------- | --------------- |
| Entry  | `public/styles/main.scss`       | `package.json`  |
| Output | `dist/public/styles/bundle.css` | `package.json`  |

### Browser Scripts

|        | File Location              | Config Location     |
| ------ | -------------------------- | ------------------- |
| Entry  | `public/scripts/*.ts`      | `webpack.config.js` |
| Output | `dist/public/scripts/*.ts` | `webpack.config.js` |

Typescript modules are compiled down to browser-compatible code through webpack and ts-loader.
