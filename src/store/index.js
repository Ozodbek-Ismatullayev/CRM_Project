import http from '@/plugins/axios'
import { createStore } from 'vuex'
export default createStore({
  state: {
   me:{}
  },
  getters: {
    
  },
  mutations: {
    getMe(state, data){
    state.me = data
   }
  },
  actions: {
   getMe({commit}){
    http.get('api/user/me').then(res=>{
      commit("getMe", res.data)
    })
   }
  },
  modules: {
   
  }
})
