import DefaultTheme from "vitepress/theme";
import "@catppuccin/vitepress/theme/mocha/red.css";
import AppCard from './components/AppCard.vue'
import AppGrid from './components/AppGrid.vue'
import RankCard from './components/RankCard.vue'
import RankGrid from './components/RankGrid.vue'
import VoteCard from './components/VoteCard.vue'
import VoteGrid from './components/VoteGrid.vue'

export default {
    extends: DefaultTheme,
    enhanceApp({app}) {
        // Register components
        app.component('AppCard', AppCard)
        app.component('AppGrid', AppGrid)
        app.component('RankCard', RankCard)
        app.component('RankGrid', RankGrid)
        app.component('VoteCard', VoteCard)
        app.component('VoteGrid', VoteGrid)
    }
}