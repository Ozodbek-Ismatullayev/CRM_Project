<template>
  <section class="groups_brands">
    <groupBrand ref="group_brand" v-model="dialog" :item="item"/>
    <groupBrand ref="delete_brand" v-model="dialog2"/>
      
      <router-link to="/products" v-if="role !== 'director'">
        <button class="btn btn-primary">
          <i class="left fa-solid fa-left-long"></i>
          Back
        </button>
      </router-link>

    <div class="row groups_brand__item">
      <div class="col-md-6 groups_brands__item_el">
        <p>Groups</p>
        <div class="groups_brands__table">
          <appTable :headers="headers" :body="$store?.state.groups">
            <template #body_action="{item}">
              <button class="delete_btn btn btn-danger" @click="deleteBrandGroup(item.id, 'group')">delete</button>
            </template>
          </appTable>
        </div>
        <aside class="groups_brands_act">
          <button class="btn btn-info" @click="openGroupBrand('groups')" v-if="role !== 'director'">Create</button>
        </aside>
      </div>

      <div class="col-md-6 groups_brands__item_el">
        <p>Brands</p>
        <div class="groups_brands__table">
          <appTable :headers="headers" :body="$store?.state.brands">
            <template #body_action="{item}">
              <button class="delete_btn btn btn-danger" @click="deleteBrandGroup(item.id, 'brand')">delete</button>
            </template>
          </appTable>
        </div>
        <aside class="groups_brands_act">
          <button class="btn btn-info" @click="openGroupBrand('brands')" v-if="role !== 'director'">Create</button>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup>
import appTable from '@/ui/app-table.vue';
import { computed, onMounted, ref } from 'vue';
import groupBrand from '@/components/pages/group-brand.vue';
import store from '@/store';

const dialog = ref(false)
const dialog2 = ref(false)
const brands = ref([])
const groups = ref([])
const group_brand = ref()
const delete_brand = ref()
const role = sessionStorage.getItem('role')
const params_group = ref({
  page: 1,
  per_page: 10,
  last_page: null,
})

const params_brand = ref({
  page: 1,
  per_page: 10,
  last_page: null,
})

const headers = ref([
  {title: "№", value: "index"},
  {title: "Name", value: "title"},
  {title: "Delete", value: "action"},
])

const deleteBrandGroup= (id, value)=>{
  delete_brand.value.deleteBrand(id, value)
  dialog2.value = true
}

const openGroupBrand =(item)=>{
  group_brand.value.create_group_brand(item)
  dialog.value = true
}

onMounted(() => {
  store.dispatch('getGroups', params_group?.value)
  store.dispatch('getBrands', params_brand?.value)
})
</script>

<style lang="scss" scoped>
  
</style>