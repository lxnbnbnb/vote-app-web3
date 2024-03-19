import {createRouter,createWebHashHistory} from 'vue-router'
import Account from '../views/Account.vue'
import Board from '../views/Board.vue'
import Mandate from '../views/Mandate.vue'
const routes=[
    {
        path:"/account",
        component:Account
    },
    {
        path:"/board",
        component:Board
    },
    {
        path:"/",
        component:Mandate
    }
]

const router=createRouter({
    history:createWebHashHistory(),
    routes, 
})
export default router
