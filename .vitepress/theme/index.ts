import DefaultTheme from 'vitepress/theme'
import 'virtual:group-icons.css'
import './style/index.css'
import {Theme} from "vitepress";
import CustomLayout from './components/CustomLayout.vue'
import HomePage from "./components/HomePage.vue";

const customTheme: Theme = {
    extends: DefaultTheme,
    enhanceApp({app}) {
        app.component("HomePage", HomePage)
    },
    Layout: CustomLayout
}
export default customTheme