export default{
    path: '/',
    name: 'auth',
    component: ()=>{
        return import("@/views/auth/Auth")
    },
}