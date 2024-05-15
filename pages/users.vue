<template>
    <h1>SYSTEM USERS</h1>
    <div v-if="pending">
        <span>Loading.....</span>
    </div>
    <div v-else>
        <v-data-table-virtual 
        :headers="headers" 
        :items="carts">
        
    </v-data-table-virtual>
       
        <!--<v-list style="background-color: #f2f2f2;" >
        <v-card v-for="t in carts" :key="t.id" class="ma-4 pa-2">
            <v-list-item  :title="t.username" subtitle="Lorem Ipsum">
           
        </v-list-item>
        </v-card>
    </v-list>-->
    
    </div>
</template>
<script setup lang="ts">
const {$api} = useNuxtApp();

const {
    data: carts,
    pending, error
} = await $api.users.getUsers();
const headers = ref(
    [{title: 'Name', key: 'username'},
    {title: 'Email', key: 'email'},
    {title: 'Password', key: 'password'}
    ]
)
definePageMeta({
    layout:'default'
})

</script>