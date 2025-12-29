import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import AboutPage from "@/views/AboutPage.vue";
import ContactPage from "@/views/ContactPage.vue";
import CheckoutPage from "@/views/CheckoutPage.vue";
import LoginPage from "@/views/LoginPage.vue";
import RegisterPage from "@/views/RegisterPage.vue";
import ProductDetail from "@/views/ProductDetail.vue";

const routes = [
    {path: "/", name: "home", component: HomePage},
    {path: "/about", name: "about", component: AboutPage},
    {path: "/contact", name: "contact", component: ContactPage},
    {path: "/checkout", name: "checkout", component: CheckoutPage},
    {path: "/login", name: "login", component: LoginPage},
    {path: "/register", name: "register", component: RegisterPage},
    {path: "/productdetail", name: "productdetail", component: ProductDetail},
];
    
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;