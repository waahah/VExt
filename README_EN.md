<h1 align="center">🚀 VExt</h1>
<p align="center">🖥 Build "Write once, run in any browser" Web Extension Starter 🔋</p>

<div align="center">
  <a href="https://github.com/waahah/VExt/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/waahah/VExt.svg" alt="LICENSE" />
  </a>
  <a href="https://github.com/waahah">
     <img src="https://img.shields.io/static/v1?label=%20&message=Github&style=flat-square&labelColor=black&color=4258dd&logo=github" alt="github" />
  </a>
  <a href="README_EN.md">English</a>
  <a href="README.md">简体中文</a>
</div>

<h3 align="center">🙋‍♂️ Made by <a href="https://www.waahah.xyz/about">@waahah</a></h3>
<hr />

![](https://s2.loli.net/2025/04/01/naCU38g5qI9wANK.png)

### Features
- ✅ Cross-browser support (Web Extension API)
- 📄 Browser-specific manifest generation
- 🌈 Auto-build and HMR hot reload on code changes
- 📦 Automatic packaging for browser-specific builds
- 🎨 Framework-agnostic
- 🤖 Auto publishing
- ✨ Continuous integration
- 🥢 SASS styling
- 🎯 ES6 module support
- 📊 Smart reload
  

### Browser Support

| [![Chrome](https://s2.loli.net/2025/03/31/rAg93eNCOj8P54y.png)](/) | [![Firefox](https://s2.loli.net/2025/03/31/yJiWdqaP6Y5ozsr.png)](/) | [![Opera](https://s2.loli.net/2025/03/31/qKPSGrilQvmgy9p.png)](/) | [![Edge](https://s2.loli.net/2025/03/31/KTsyfa3QDZ6o9dn.png)](/) | [![Yandex](https://s2.loli.net/2025/03/31/arqyo6B2w7VeAld.png)](/) | [![Brave](https://s2.loli.net/2025/03/31/YlTZOBo5AsWqSia.png)](/) | [![vivaldi](https://s2.loli.net/2025/03/31/a9OmnPAipo6F7Yz.png)](/) |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 79 & later ✔                                                 | 52 & later ✔                                                 | 36 & later ✔                                                 | 79 & later ✔                                                 | Latest ✔                                                     | Latest ✔                                                     | Latest ✔                                                     |

### 🚀 Get started fast

Creating a new project with [vext-cli](https://github.com/waahah/vext-cli) is as simple as running the following command:

```bash
npm install -g create-vext
# Or use yarn
yarn global add create-vext
# create new project
vext create <project-name>
```

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

### Continuous Integration

You can automatically publish to both the Chrome Web Store and Mozilla Addons by adding the following secrets in GitHub Actions:

- **CLIENT_ID** and **CLIENT_SECRET**, along with **REFRESH_TOKEN** and **EXTENSION-ID** from Google APIs
- **WEB_EXT_API_KEY** and **WEB_EXT_API_SECRET** from AMO

The GitHub Actions workflow will:

- Build the extension
- Deploy the extension to both stores

Thanks to the included [GitHub Action](https://github.com/waahah/VExt/actions) workflow, CI can:

- Trigger when a new tag is committed
- Be triggered manually by clicking "Run workflow" in the Actions tab


> Start building your cross-browser extension today! ✨

### 🧹 Extensions Built with This Project
- [Meow](https://github.com/waahah/Meow)
