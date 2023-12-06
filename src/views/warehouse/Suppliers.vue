<template>
  <section class="groups_brands">
    <suppliers ref="supplier"/>
    <div class="groups_brands__item">
      <div class="groups_brands__table">
        <appTable :headers="headers" :body="$store?.state?.suppliers">
          <template #body_action="{item}" v-if="role !== 'director'">
            <span class="edit" @click="openModalEdit(item)"><i class="fa-solid fa-pen-to-square"></i></span>
            <span class="delete" @click="deleteModal(item)"><i class="fa-solid fa-trash-can"></i></span>
          </template>
        </appTable>

        <div class="pagination">
          <VPagination
          v-model="params.page"
          :pages="params.last_page"
          :range-size="1"
          active-color="#EAF5FF"
          @update:modelValue="getItem"/>
        </div>

        <aside class="groups_brands__act">
          <button @click="openModal" v-if="role !== 'director'">Create</button>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup>
import director from '@/router/director';
import { computed, onMounted, ref } from 'vue';
import VPagination from '@hennge/vue3-pagination'
import store from '@/store';
import appTable from '@/ui/app-table.vue';
import suppliers from '@/components/pages/suppliers.vue'
  
const params = ref({
  page: 1,
  per_page: 10,
  last_page: null
})

const role = sessionStorage.getItem("role")
const supplier = ref()
const headers = ref([
{title:"No", value:"id"},
{title:"Name", value:"title"},
{title:"Address", value:"address"},
{title:"Credit", value:"credit"},
{title:"Action", value:"action"},
])

const deleteModal = (item)=>{
  supplier.value.openDeleteModal(item)
}
const openModal =()=>{
  supplier.value.openModal()
}

const openModalEdit =(item)=>{
  supplier.value.openModalEdit(item)
}
</script>

<style lang="scss" scoped>
  
</style>