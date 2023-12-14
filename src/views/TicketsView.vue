<template>
  <header>
    <div class="grid grid2">
      <div class="col-2 flex flex-column">
        <img style="width: fit-content" class="image" src="../assets/img/Osol.png" alt="" />
        <Divider />
        <nav class="navbar">
          <ul class="list-none p-0 m-0 overflow-hidden">
            <li>
              <a
                @click="backToDashboard"
                v-ripple
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
                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
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
                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
              >
                <i class="pi pi-th-large mr-2"></i>
                <span class="font-medium">Statistics</span>
              </a>
            </li>
            <li>
              <a
                @click="goToTickets"
                v-ripple
                :class="{ 'active-menu-item': isCurrentRoute('/tickets') }"
                class="flex align-items-center cursor-pointer p-3 border-round text-700 p-ripple"
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
    </div>
  </header>
  <main>
    <div class="grid"></div>
  </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

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
</style>
