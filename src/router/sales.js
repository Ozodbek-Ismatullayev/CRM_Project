export default {
    path: '/sales',
    name: 'sales',
    component: ()=>{
        return import("@/views/sales/Sales")
    },
}