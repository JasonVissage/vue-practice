import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './pages/HomePage.vue'
import BackgroundImage from './pages/BackgroundImagePage.vue'
import ImageSliderPage from './pages/ImageSliderPage.vue';
import './App.css'

const router = createRouter( {
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home}, 
        {path: '/backgroundimage', name: 'BackgroundImage', component: BackgroundImage}, 
        {path: '/imagesliderpage', name: 'ImageSlider', component: ImageSliderPage}, 
    ]
})

createApp(App)
.use(router)
.mount('#app')



