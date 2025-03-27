import { defineManifest } from '@crxjs/vite-plugin'
//const targetBrowser = process.env.VITE_BROWSER;

export default (env) => defineManifest({
    manifest_version: 3,
    name: '__MSG_extName__',
    version: '1.0.0',
    description: '__MSG_extDescription__',
    default_locale: 'zh_CN',
    permissions: [
        'bookmarks',
        'storage',
        'favicon',
        'webRequest',
        'webRequestBlocking',
        'activeTab',
        "storage",
        "tabs",
        "notifications",
        "scripting"
    ],

    host_permissions: [
        "http://*/*",
        "https://*/*"
    ],

    action: {
        default_icon: {
            16: "icons/icon16.png",
            48: "icons/icon48.png",
            128: "icons/icon128.png"
        },
        default_title: "__MSG_extName__",
        default_popup: "src/popup/index.html"
    },

    background: env.VITE_BROWSER === 'firefox' ? {
        scripts: ['src/background/background.js'],
        type: 'module'
    } : {
        service_worker: 'src/background/background.js',
        type: 'module'
    },

    ...(env.VITE_BROWSER === 'firefox' ? {
        developer: {
            name: "your_name",
            url: "https://github.com/waahah/VExt"
        }
    } : {
        author: "your_name",
        homepage_url: "https://github.com/waahah/VExt"
    }),

    ...(env.VITE_BROWSER === 'chrome' && {
        options_page: "src/options/index.html",
    }),

    options_ui: {
        page: "src/options/index.html",
        open_in_tab: true
    },

    icons: {
        16: 'icons/icon16.png',
        48: 'icons/icon48.png',
        128: 'icons/icon128.png',
        32: 'icons/icon32.png'
    },

    content_scripts: [
        {
            matches: [
                "*://*.bing.com/*",
                "*://*.google.com/*"
            ],
            all_frames: false,
            run_at: "document_idle",
            js: [
                "src/contentScript/content.js"
            ]
        }
    ],

    ...(env.VITE_BROWSER === 'firefox' && {
        browser_specific_settings: {
            gecko: {
                id: env.VITE_GECKO_ID,
                strict_min_version: env.VITE_GECKO_MIN_VER
            }
        }
    }),

    ...(env.VITE_BROWSER === 'chrome' && {
        minimum_chrome_version: env.VITE_CHROME_MIN_VER
    }),

    web_accessible_resources: [{
        resources: [
            '*.html',
            '*.js'
        ],
        matches: ['<all_urls>'],
        ...(env.VITE_BROWSER === 'chrome' && { 
            use_dynamic_url: true 
        })
    }].filter(Boolean)
})