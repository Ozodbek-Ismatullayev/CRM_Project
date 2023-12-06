export default {
    path: "/warehouse",
    name: "warehouse",
    component: ()=>{
        return import("@/views/warehouse/Warehouse")
    },
    children:[
        {
          path: '/products',
          name: 'products',
          component: ()=>{
            return import("@/views/warehouse/Products")
        }
        },
        {
          path: '/single_product/:id',
          name: 'single_product',
          component: ()=>{
            return import("@/views/warehouse/SingleProduct")
        }
        },
        {
          path: '/profile',
          name: 'profile',
          component: ()=>{
            return import("@/views/global/Profile")
        }
        },
        {
          path: '/arrived',
          name: 'arrived',
          component: ()=>{
            return import("@/views/warehouse/Arrived")
        }
        },
        {
          path: '/delivered',
          name: 'delivered',
          component: ()=>{
            return import("@/views/warehouse/Delivered")
        }
        },
        {
          path: '/returned',
          name: 'returned',
          component: ()=>{
            return import("@/views/warehouse/Returned")
        }
        },
        {
          path: '/suppliers',
          name: 'suppliers',
          component: ()=>{
            return import("@/views/warehouse/Suppliers")
        }
        },
        {
          path: '/groups-brands',
          name: 'groups-brands',
          component: ()=>{
            return import("@/views/warehouse/Groups-Brands")
        }
        },
    ]
}