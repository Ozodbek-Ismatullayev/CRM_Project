export default {
    path: '/finance',
    name: 'finance',
    component: ()=>{
        return import("@/views/finance/Finance")
    },
}