import {defineConfig} from 'vitepress'

export default defineConfig({
    title: 'Creative Central',
    description: 'Minecraft Server',
    base: '/',
    head: [
        ['link', {rel: 'icon', href: '/logo.png', type: 'image/png'}],
    ],
    lastUpdated: true,
    themeConfig: {
        logo: '/logo.png',
        nav: [
            {text: 'Home', link: '/'},
            {
                text: 'Servers',
                items: [
                    {text: 'Plots', link: '/server/plots/'},
                    {text: 'Earth', link: '/server/earth/'},
                    {text: 'Islands', link: '/server/islands/'}
                ]
            },
            {
                text: 'Staff',
                items: [
                    {text: 'Our Team', link: '/team/'},
                    {text: 'Apply for Staff', link: '/apply/'}
                ]
            },
            {text: 'Store', link: 'https://store.creative-central.net'},
            {text: 'Earth Map', link: 'https://creative-central.net/map'}
        ],
        sidebar: [
            {
                text: 'Introduction',
                collapsed: false,
                items: [
                    {text: 'Welcome', link: '/help/'},
                    {text: 'Rules', link: '/rules/'},
                    {text: 'Vote', link: '/vote/'}
                ]
            },
            {
                text: 'Servers',
                collapsed: false,
                items: [
                    {text: 'Plots', link: '/server/plots/'},
                    {text: 'Earth', link: '/server/earth/'},
                    {text: 'Islands', link: '/server/islands/'}
                ]
            },
            {
                text: 'Ranks',
                collapsed: false,
                items: [
                    {text: 'Ranks', link: '/rank/'},
                    {text: 'Sponsor', link: '/rank/sponsor/'},
                    {text: 'Sponsor+', link: '/rank/sponsor+/'}
                ]
            },
            {
                text: 'Staff',
                collapsed: false,
                items: [
                    {text: 'Our Team', link: '/team/'},
                    {text: 'Apply for Staff', link: '/apply/'}
                ]
            }
        ],
        socialLinks: [
            {icon: 'discord', link: 'https://discord.gg/XUNqRAm9aA'},
            {icon: 'tiktok', link: 'https://www.tiktok.com/@projecteverythingmain'},
            {icon: 'x', link: 'https://x.com/Zilevola'},
            {icon: 'youtube', link: 'https://youtube.com/@projecteverythingmain'}
        ],
        footer: {
            message: 'If you need support, contact us at: support@projecteverything.net',
            copyright: '© 2026 Project Everything - All Rights Reserved'
        }
    },
    markdown: {
        theme: {
            light: "catppuccin-latte",
            dark: "catppuccin-mocha",
        },
    }
})