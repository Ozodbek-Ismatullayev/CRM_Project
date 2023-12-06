import http from '@/plugins/axios'
import { createStore } from 'vuex'
export default createStore({
  state() {
   me:{};
   brands:[];
   groups:[];
   suppliers:[];
   clients:[];
   products:[];
   count: null
  },
  getters: {
    
  },
  mutations: {
    getMe(state, data){
    state.me = data
   },

   getSuppliers(state, data){
    state.suppliers = data
   },
   
   getBrands(state, data){
    state.brands = data
   },

   getGroups(state, data){
    state.groups = data
   },

   getClients(state, data){
    state.clients = data
   },
    
   getProducts(state, data){
    state.products = data
   }
  },
  actions: {
   getMe({commit}){
    http.get('api/user/me').then(res=>{
      commit("getMe", res.data)
    })
   },
   
   getSuppliers({commit}){
    http.get('api/warehouse/brand/').then((res)=>{
      commit("getSuppliers", res.data.results)
    })
   },
   
   getBrands({commit}, param){
    http.get('api/warehouse/brand/', {
      params: {
        per_page: param?.per_page,
        page: param?.page
      }
    }).then((res)=>{
      res.data.results.forEach((item, index)=>{
        item.index = param?.page * param?.per_page - (param?.per_page - 1) + index;
      }) 
      commit("getBrands", res?.data?.results)
    })
   },

   getGroups({commit}, param){
    http.get('api/warehouse/group/', {
      params: {
        per_page: param?.per_page,
        page: param?.page
      }
    }).then((res)=>{
      res.data.results.forEach((item, index)=>{
        item.index = 
        param?.page * param?.per_page - 
        (param?.per_page - 1) + 
        index;
      }) 
      commit("getGroups", res?.data?.results)
    })
   },

   getClients({commit}){
    http.get('api/sales/client/').then((res)=>{
      commit("getClients", res.data.results)
    })
   },

   getProducts({commit}){
    http.get('api/warehouse/product/').then((res)=>{
      commit("getProducts", res.data.results)
    })
   }
  },
  modules: {
   
  }
})
