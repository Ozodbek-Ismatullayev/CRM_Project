<template>
    <div class="product__lists">
        <div class="product__lists-table">
            <Product_modal ref="product_list"/>
            <div class="product__lists-btns m-3">
                
                <router-link to="/groups-brands">
                    <button class="btn btn-primary">          
                        <i class="right fa-solid fa-right-long"></i>
                        Groups and Brands
                    </button>
                </router-link>
                <button class="btn btn-primary" @click="openModal">Add Product</button>
            </div>
            <appTable :headers="headers" :body="product_lists">
                <template #body_group="{item}">
                    <span>{{ item.group.title }}</span>
                </template>

                <template #body_brand="{item}">
                    <span>{{ item.brand.title }}</span>
                </template>

                <template #body_description="{item}">
                    <span class="product__lists-table-text">{{ item.description }}</span>
                </template>

                <template #body_title="{item}">
                    <router-link :to="{name: 'single_product', params: {id: item.id}}" class="product__lists-table-text">{{ item.title }}</router-link>
                </template>
            </appTable>
        </div>

        <div class="pagination">
            <VPagination
              v-model="params.page"
              :pages="params.last_page"
              :range-size="1"
              active-color="#EAF5FF"
              @update:modelValue="getProduct"
            />
        </div>
    </div>
</template>

<script setup>
import http from '@/plugins/axios';
import appTable from '@/ui/app-table.vue';
import { onMounted, ref } from 'vue';
import VPagination from '@hennge/vue3-pagination'
import Product_modal from '@/components/pages/product_modal.vue';


const product_list = ref("")
const product_lists = ref([])
const params = ref({
    page: 1,
    per_page: 10,
    last_page: null
})
const headers = ref([
    {title: "No", value: "index"},
    {title: "Name", value: "title"},
    {title: "Code", value: "code"},
    {title: "Brand", value: "brand"},
    {title: "Group", value: "group"},
    {title: "Arrival price", value: "current_arrival_price"},
    {title: "Selling price", value: "current_selling_price"},
    {title: "Description", value: "description"},
])
const getProduct=()=>{
    http.get("api/warehouse/product/",{
        params: {
            per_page: params.value.per_page,
            page: params.value.page
        }
    }).then(res=>{
        product_lists.value = res.data.results
        product_lists.value.forEach((item,index)=>{
            item.index = 
                params.value.page * params.value.per_page -
                (params.value.per_page - 1) + index;
        });
        params.value.last_page = Math.ceil(res.data.count / params.value.per_page)
    })
}

const openModal =()=>{
    product_list.value.openModal()
}
onMounted(() => {
    getProduct()
})
</script>

<style lang="scss" scoped>
$blue-color: #435EBE;
$white-color: #fff;

.product__lists{
    .product__lists-btns{
        display: flex;
        justify-content: space-between;
    }
    .product__lists-action{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 15px;
        gap: 15px;
        .btn{
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            background-color: $blue-color;
            color: $white-color;
            cursor: pointer;
            display: flex;
            gap: 8px;
            align-items: center;
            &:hover .right{
                transform: translateX(5px);
            }

            .right{
                font-size: 14px;
                transition: all 0.3s linear;
            }
        }
    }

    .product__lists-table{
        width: 100%;
        display: flex;
        flex-direction: column;
        overflow-x: scroll;
        .product__lists-table-text{
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            color: #000;
            &:hover{
                color: $blue-color;
                font-size: 13.5px;
            }
        }
    }
    .pagination{
        width: 98%;
        display: flex;
        align-items: center;
        justify-content: end;
        margin: 10px 0;
    }
}
</style>