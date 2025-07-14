import type {DefaultTheme} from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
    {text: '首页', link: '/'},
    {
        text: '刷题笔记',
        activeMatch: '代码随想录',
        items: [
            {text: '📘 代码随想录', link: '/代码随想录', activeMatch: '代码随想录'},
        ]
    },
    // {text: '测试', link: '/测试/'},
    // {
    //     text: '算法专题',
    //     items: [
    //         {text: '数据结构', link: '/markdown-examples'},
    //         {text: 'Item B', link: '/markdown-examples'},
    //         {text: 'Item C', link: '/markdown-examples'}
    //     ]
    // },
    // {
    //     text: '设计模式',
    //     items: [
    //         {text: '23种设计模式', link: '/markdown-examples'},
    //         {text: '23道编程习题', link: '/markdown-examples'},
    //     ]
    // },
    // {
    //     text: '前端',
    //     items: [
    //         {
    //             text: '基础知识',
    //             items: [
    //                 {text: '📘 html', link: '/workflow/style-guide'},
    //                 {text: '📘 css', link: '/workflow/style-guide'},
    //                 {text: '📘 javascript', link: '/workflow/style-guide'},
    //             ]
    //         },
    //         {
    //             text: '常用框架',
    //             items: [
    //                 {text: '📘 vue', link: '/workflow/utils/regexp'},
    //                 {text: '📘 react', link: '/workflow/utils/snippets'}
    //             ]
    //         }
    //     ],
    // },
    // {
    //     text: '设计模式',
    //     items: [
    //         {text: '23种设计模式', link: '/markdown-examples'},
    //         {text: '23道编程习题', link: '/markdown-examples'},
    //     ]
    // }
]