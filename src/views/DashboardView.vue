<template>
  <header>
    <div class="grid">
      <div class="col-2 flex flex-column">
        <img style="width: fit-content" class="image" src="../assets/img/Osol.png" alt="" />
        <Divider />
        <nav class="navbar">
          <ul class="list-none p-0 m-0 overflow-hidden">
            <li>
              <a
                v-ripple
                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
              >
                <i class="pi pi-th-large mr-2"></i>
                <span class="font-medium">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                v-ripple
                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
              >
                <i class="pi pi-list mr-2"></i>
                <span class="font-medium">List of Organisations</span>
              </a>
            </li>
            <li>
              <a
                v-ripple
                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
              >
                <i class="pi pi-server mr-2"></i>
                <span class="font-medium">List of O'Sol Base</span>
              </a>
            </li>
            <li>
              <a
                v-ripple
                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
              >
                <i class="pi pi-home mr-2"></i>
                <span class="font-medium">List of O'Sol Pico</span>
              </a>
            </li>
            <li>
              <a
                v-ripple
                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
              >
                <i class="pi pi-users mr-2"></i>
                <span class="font-medium">List of users</span>
              </a>
            </li>
            <li>
              <a
                v-ripple
                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
              >
                <i class="pi pi-th-large mr-2"></i>
                <span class="font-medium">Statisics</span>
              </a>
            </li>
            <li>
              <a
                v-ripple
                class="flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple"
              >
                <i class="pi pi-ticket mr-2"></i>
                <span class="font-medium">Tickets</span>
              </a>
            </li>
            <li class="alone">
              <a
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
</template>

<script setup lang="ts"></script>

<style>
.grid {
  flex-direction: column;
}
.col-2 {
  background-color: #6182c0;
  height: 710px;
}
#app > header:nth-child(2) > div > div {
  padding: 0;
}
.image {
  padding: 0.8rem;
}
.alone {
  margin-top: 70%;
}
</style>
