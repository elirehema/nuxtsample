<template>
  <div v-if="pending">
    <span>Loading.....</span>
  </div>
  <div v-else>
    <v-card>
        <v-data-table :headers="headers" :items="products">
        <template v-slot:top>
            <v-toolbar>
                <v-toolbar-title class="font-weight-black">Products</v-toolbar-title>
            </v-toolbar>
        </template>
      <template v-slot:item.image="{ item }">
        <v-card class="my-2 pa-1" elevation="2" rounded>
          <v-img :src="item.image" height="64" cover></v-img>
        </v-card>
      </template>
    </v-data-table>
    </v-card>
  </div>
</template>
<script setup lang="ts">
const { $api } = useNuxtApp();

const {
  data: products,
  pending,
  error,
} = await $api.products.getProducts();

const headers = ref([
  { title: "Image", key: "image" },
  { title: "Category", key: "category" },
  { title: "Description", key: "description" },
]);
</script>