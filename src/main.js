import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./pages/HomePage.vue";
import BackgroundImage from "./pages/BackgroundImagePage.vue";
import ImageSliderPage from "./pages/ImageSliderPage.vue";
import InfoCardsPage from "./pages/InfoCardsPage.vue";
import FlipCardPage from "./pages/FlipCardPage.vue";
import HamburgerMenuPage from './pages/HamburgerMenuPage.vue';
import GalleryComponent from './pages/GalleryPage.vue';
import "./App.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    {
      path: "/backgroundimage",
      name: "BackgroundImage",
      component: BackgroundImage,
    },
    {
      path: "/imagesliderpage",
      name: "ImageSlider",
      component: ImageSliderPage,
    },
    { path: "/infocards", name: "InfoCards", component: InfoCardsPage },
    { path: "/flipcard", name: "FlipCard", component: FlipCardPage },
    { path: "/hamburgermenu", name: "HamburgerMenu", component: HamburgerMenuPage },
    { path: "/gallerypage", name: "GalleryComponent", component: GalleryComponent },
  ],
});

createApp(App).use(router).mount("#app");
