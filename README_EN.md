<h1 align="center">🚀 VExt</h1>
<p align="center">🖥 Build "Write once, run in any browser" Web Extension Starter 🔋</p>

<div align="center">
  <a href="https://github.com/waahah/VExt/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/waahah/VExt.svg" alt="LICENSE" />
  </a>
  <a href="https://github.com/waahah">
     <img src="https://img.shields.io/static/v1?label=%20&message=Github&style=flat-square&labelColor=black&color=4258dd&logo=github" alt="github" />
  </a>
  <a href="README_EN">English</a>
  <a href="README">简体中文</a>
</div>

<h3 align="center">🙋‍♂️ Made by <a href="https://www.waahah.xyz/about">@waahah</a></h3>
<hr />

![](https://raw.githubusercontent.com/wxt-dev/wxt/HEAD/docs/assets/cli-output.png)

### Features
- ✅ Cross-browser support (Web Extension API)
- 📄 Browser-specific manifest generation
- 🌈 Auto-build and HMR hot reload on code changes
- 📦 Automatic packaging for browser-specific builds
- 🥢 SASS styling
- 🎯 ES6 module support
- 📊 Smart reload
- 🎨 Framework-agnostic
- 🤖 Auto publishing
- 🥡 Out-of-the-box experience

### Browser Support

| [![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)](/) | [![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)](/) | [![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png)](/) | [![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png)](/) | [![Yandex](https://raw.github.com/alrra/browser-logos/master/src/yandex/yandex_48x48.png)](/) | [![Brave](https://raw.github.com/alrra/browser-logos/master/src/brave/brave_48x48.png)](/) | [![Vivaldi](https://raw.github.com/alrra/browser-logos/master/src/vivaldi/vivaldi_48x48.png)](/) |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 49 & later ✔                                                                                  | 52 & later ✔                                                                                     | 36 & later ✔                                                                               | 79 & later ✔                                                                            | Latest ✔                                                                                      | Latest ✔                                                                                   | Latest ✔                                                                                         |

### 📦 Prerequisites

- `node >= 18`
- `npm 9.x+`

### 🔧 Install Dependencies

```bash
git clone https://gitee.com/waahah/VExt.git
cd VExt
npm install
```

### Development Mode

```bash
npm run dev           # Start development server (HMR)
npm run watch:firefox # Firefox hot reload build
npm run watch:chrome  # Chrome hot reload build
```

### Production Build

```bash
npm run build:firefox  # Build for Firefox
npm run build:chrome   # Build for Chrome
```

### Run Locally

```bash
npm run start:firefox  # Start a test instance in Firefox
npm run start:chrome   # Start a test instance in Chrome
```
After running, the corresponding browser will launch and automatically load the project.

### Code Quality

```bash
npm run lint  # Run build and code linting
```

### Package as ZIP
```bash
npm run pack:firefox  # Package for Firefox
npm run pack:chrome   # Package for Chrome
```
The packaged files will be output to the `web-ext-artifacts/` directory.

### CRX Packaging
```bash
npm run pack:crx  # Generate .crx extension package (requires scripts/crx-pack.js configuration)
```

### Signing & Publishing
```bash
npm run sign:firefox  # Sign and publish for Firefox (requires API key configuration)
npm run sign:chrome   # Sign and publish for Chrome (requires Web Store credentials)
```
Automatically uploads the extension for signing and publishing. Signed .XPI files will be output to `web-ext-artifacts/`.

### ⚙️ Configuration Guide
1. **Environment Mode**: Modify the manifest file.
2. **Build Output**: Default build output is generated in the `/dist` directory.
3. **Signing Configuration**: Configure credentials in `package.json`:
```
Firefox: <your-jwt-issuer> and <your-jwt-secret>
Chrome:
<your-client-id>
<your-client-secret>
<your-refresh-token>
<your-extension-id>
```
- To get `firefox` API keys, refer to [this guide](https://extensionworkshop.com/documentation/develop/web-ext-command-reference/#web-ext-sign)
- To get `chrome` API keys, refer to [this guide](https://github.com/fregante/chrome-webstore-upload-keys)

> Start building your cross-browser extension today! ✨

### 🧹 Extensions Built with This Project
- [Meow](https://github.com/waahah/Meow)
