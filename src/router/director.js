export default {
    path: '/director',
    name: 'director',
    component: ()=>{
        return import("@/views/director/Director")
    },
}