# Arziburst React App

### Welcome to Arziburst React App.

Arziburst React App works on Windows, Linux, macOS.<br>
If something doesn’t work, please [file an issue](https://github.com/Arziburst/boilerplate/issues/new).<br>
If you have some enhancements, please [file an pull request](https://github.com/Arziburst/boilerplate/compare).<br>

## Quick Overview

```
INITIALIZING COMMANDS
```

Also you can create `.env.development` and `.env.production` by example from `.env.example`.

### `yarn start`
To run project in dev mode

### `yarn run build`
To create bundle

### `yarn run serve`
To serve bundle

### `yarn run analyze`
To analyze bundle with `webpack-bundle-analyzer`

### `yarn run gen`
To generate some template file

## Features
🔍 Code generating<br>
🔍 Font minification<br>
🔍 Image lossless minification<br>
🔍 Auto generated manifest<br>
🔍 Bundle file stats analytics<br>

## Technologies
✅ Webpack `v5.60.0`<br>
✅ Typescript `v4.4.4`<br>
✅ React `v17.0.2`<br>
✅ Redux `v4.1.1`<br>
✅ Styled-components `v5.3.1`<br>
✅ ESLint `v7.18.0`<br>

## Requirements
❗️ Yarn `v1.22.17 or later`<br>
❗️ Node `v14.0.0 of later`<br>
❗️ Font types `ttf`  `eot` `woff` `woff2`<br>

### ⚠️ If you will use another tools you may catch unexpected errors

## Additions
📍 Auto formatting code with ESLint

You may need to correct `settings.json` in VS Code
```json
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
},
"eslint.format.enable": true,
```

📍 Extention for VS Code `Better Comments (id: aaron-bond.better-comments)`

Best comments names:

![image](https://user-images.githubusercontent.com/53538417/139050274-e7f87f9e-7d8c-4b9c-8ac2-8f65837850c2.png)
