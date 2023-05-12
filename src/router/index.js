import {createRouter, createWebHistory} from "vue-router";
import HomeContentComponent from "../public/components/home-content.component.vue";
import ErrorContentComponent from "../public/components/error-content.component.vue";
const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),

    routes:[
        {path:'/home', name:'home', alias:'/', component: HomeContentComponent},
        {path:'*', name:'error',component: ErrorContentComponent}
    ]
})
export default router