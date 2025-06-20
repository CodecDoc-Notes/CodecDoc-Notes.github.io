import {defineConfig} from "vitepress";
import {configureDiagramsPlugin} from "vitepress-plugin-diagrams";
import {sidebar} from "./config/sidebar";
import {nav} from "./config/nav";
import {groupIconMdPlugin, groupIconVitePlugin} from 'vitepress-plugin-group-icons'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Codec-Note",
    description: "A VitePress Site",
    srcDir: 'note',
    outDir: 'dist',
    markdown: {
        lineNumbers: true,
        config(md) {
            configureDiagramsPlugin(md, {
                diagramsDir: "public/diagrams", // Optional: custom directory for SVG files
                publicPath: "/diagrams", // Optional: custom public path for images
            })
            md.use(groupIconMdPlugin)
        }
    },
    vite: {
        publicDir: "../public",
        plugins: [groupIconVitePlugin()]
    },

    // base: '/codec-note/',
    themeConfig: {
        search: {
            provider: "local",
            options: {
                miniSearch: {
                    options: {
                        /* ... */
                    },
                    searchOptions: {
                        /* ... */
                    },
                },
                translations: {
                    button: {
                        buttonText: "搜索文档",
                        buttonAriaLabel: "搜索文档",
                    },
                    modal: {
                        noResultsText: "没有找到结果",
                        resetButtonTitle: "清除搜索条件",
                        footer: {
                            selectText: "选择",
                            navigateText: "切换",
                            closeText: "关闭",
                        },
                    },
                },
            },
        },
        logo: {src: '/avatar.svg', width: 24, height: 24},

        // https://vitepress.dev/reference/default-theme-config
        nav,

        sidebar,

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ],

        docFooter: {
            prev: "上一页",
            next: "下一页",
        },

        // lastUpdated: {
        //     text: "最后更新于",
        //     formatOptions: {
        //         year: 'numeric',
        //         month: '2-digit',
        //         day: '2-digit',
        //         hour: '2-digit',
        //         minute: '2-digit',
        //         second: '2-digit',
        //         hour12: false,
        //     }
        // },
        //
        // editLink: {
        //     pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
        //     text: "在 github 上编辑此页",
        // },
    },
    appearance: false
})
