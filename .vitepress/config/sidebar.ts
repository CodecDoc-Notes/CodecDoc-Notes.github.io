import type {DefaultTheme} from "vitepress";
import * as fs from 'node:fs'
import * as path from 'node:path';

function getFileInfos(dir: string) {
    return fs.readdirSync(dir)
        .filter(fileName => {
            const fileNameSplit = fileName.split('-')
            if (fileName.length <= 1) return false
            const number = Number(fileNameSplit[0])
            if (!Number.isFinite(number)) return false
            return true
        })
        .map(fileName => {
            const filePath = path.join(dir, fileName);
            const stat = fs.lstatSync(filePath)
            return {
                fullFileName: fileName,
                fileName: fileName.split('-')[1].split('.')[0],
                isDirectory: stat.isDirectory(),
                number: Number(fileName.split('-')[0]),
                filePath: dir
            }
        })
        .sort((o1, o2) => {
            if (o1.isDirectory && !o2.isDirectory) {
                return -1
            } else if (!o1.isDirectory && o2.isDirectory) {
                return 1
            } else {
                return o1.number - o2.number
            }
        });
}

function getSidaBarItem(dir: string) {
    const fileInfos = getFileInfos(dir)
    const sidebarItems: DefaultTheme.SidebarItem[] = fileInfos.map(fileInfo => {
        const item: DefaultTheme.SidebarItem = {}
        if (fileInfo.isDirectory) {
            item.text = `📘 ${fileInfo.fileName}`
            item.collapsed = false
            item.items = getSidaBarItem(path.join(dir, fileInfo.fullFileName))
        } else {
            item.text = `📝 ${fileInfo.fileName}`
            item.link = path.join(dir, fileInfo.fullFileName).replace(/\\/g, '/').replace('note', '');
        }
        return item
    })
    return sidebarItems;
}

const getSideBar = () => {
    const sidebar: DefaultTheme.SidebarMulti = {}
    for (let fileName of fs.readdirSync('note')) {
        const filePath = path.join('note', fileName);
        const stat = fs.lstatSync(filePath)
        if (stat.isFile()) continue
        sidebar[`/${fileName}/`] = getSidaBarItem(filePath)
    }
    return sidebar
}

export const sidebar: DefaultTheme.Sidebar = getSideBar()