<template>
  <div class="grid">
    <div class="col-2 flex flex-column">
      <img style="width: fit-content" class="image" src="../assets/img/Osol.png" alt="" />
      <Divider />
      <nav class="navbar">
        <ul class="list-none p-0 m-0 overflow-hidden">
          <li>
            <a
              v-ripple
              @click="backToDashboard"
              class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
            >
              <i class="pi pi-th-large mr-2"></i>
              <span class="font-medium">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              @click="goToListOfOrganizations"
              v-ripple
              :class="{ 'active-menu-item': isCurrentRoute('/list_of_organisations') }"
              class="flex align-items-center cursor-pointer p-3 border-round text-700 p-ripple"
            >
              <i class="pi pi-list mr-2"></i>
              <span class="font-medium">List of Organizations</span>
            </a>
          </li>
          <li>
            <a
              @click="osolbase"
              v-ripple
              class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
            >
              <i class="pi pi-server mr-2"></i>
              <span class="font-medium">List of O'Sol Base</span>
            </a>
          </li>
          <li>
            <a
              @click="goToListOfOsolPico"
              v-ripple
              class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
            >
              <font-awesome-icon class="mr-2" :icon="['far', 'hard-drive']" />
              <span class="font-medium">List of O'Sol Pico</span>
            </a>
          </li>
          <li>
            <a
              @click="goToListOfUsers"
              v-ripple
              class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
            >
              <i class="pi pi-users mr-2"></i>
              <span class="font-medium">List of users</span>
            </a>
          </li>
          <li>
            <a
              @click="goToStatistics"
              v-ripple
              class="flex align-items-center cursor-pointer p-3 border-round text-700 p-ripple"
              style="cursor: not-allowed; pointer-events: none"
            >
              <i class="pi pi-th-large mr-2"></i>
              <span class="font-medium">Statistics</span>
            </a>
          </li>
          <li>
            <a
              @click="goToTickets"
              v-ripple
              class="flex align-items-center cursor-pointer p-3 border-round text-700 p-ripple"
              style="cursor: not-allowed; pointer-events: none"
            >
              <i class="pi pi-ticket mr-2"></i>
              <span class="font-medium">Tickets</span>
            </a>
          </li>
          <li class="alone">
            <a
              @click="goToLogin"
              v-ripple
              class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
            >
              <i class="pi pi-sign-out mr-2"></i>
              <span class="font-medium">Log Out</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <main class="col-10 px-6 mt-3">
      <div class="grid align-items-center justify-content-between">
        <div class="col">
          <h2 class="main-color">List of Organizations</h2>
        </div>
        <div class="col flex justify-content-end">
          <button class="btn-org px-4">Create a new organization</button>
        </div>
      </div>
      <div class="grid align-items-center justify-content-between">
        <div class="col">
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText
              size="small"
              style="width: 450px"
              v-model="value1"
              placeholder="Search for an organization by its name, manager, or e-mail."
            />
          </span>
        </div>
        <div class="col flex justify-content-end">
          <button class="px-2">
            Filter <i class="pi pi-filter" style="font-size: 0.8rem"></i>
          </button>
        </div>
      </div>
      <div class="grid align-items-center">
        <div class="col mt-4">
          <div class="card">
            <DataTable :value="products" tableStyle="min-width: 50rem">
              <Column
                v-for="col of columns"
                :key="col.field"
                :field="col.field"
                :header="col.header"
              ></Column>
            </DataTable>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import axios from 'axios'
import { ref, onMounted } from 'vue'
const value1 = ref(null)
onMounted(async () => {
  try {
    // requête API pour obtenir les données pico
    const response = await axios.get('http://localhost:8000/api/organisations')

    products.value = response.data
  } catch (error) {
    console.error('Erreur lors de la récupération des données API :', error)
  }
})

const products = ref()
const columns = [
  { field: 'raisonSociale', header: 'Organization name' },
  { field: 'name', header: 'Bases' },
  { field: 'category', header: 'Status' },
  { field: 'nom_manager', header: "Manager's name" },
  { field: 'idOrganisation', header: 'Organization ID' }
]

const router = useRouter()
// Fonction pour vérifier si la route actuelle correspond à un chemin spécifique
function isCurrentRoute(path: string): boolean {
  return router.currentRoute.value.path === path
}
function goToLogin() {
  window.location.href = '/login'
}
function goToListOfOrganizations() {
  window.location.href = '/list_of_organizations'
}
const osolbase = async () => {
  try {
    router.push('/list_of_osol_base')
  } catch (error) {
    console.error('Erreur de redirection :', error)
  }
}
function goToListOfOsolPico() {
  window.location.href = '/list_of_osol_pico'
}
function goToListOfUsers() {
  window.location.href = '/list_of_users'
}
function goToStatistics() {
  window.location.href = '/statistics'
}
function goToTickets() {
  window.location.href = '/tickets'
}
function backToDashboard() {
  window.location.href = '/dashboard'
}
</script>

<style scoped>
.active-menu-item {
  background-color: #79a1e6;
  color: rgb(236, 236, 236);
}

.btn-org {
  color: #40454e;
  background-color: #79a1e6;
  border-radius: 15px;
  padding-top: 7px;
  padding-bottom: 7px;
}
</style>
