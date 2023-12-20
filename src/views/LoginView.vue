<template>
  <div class="flex flex-column overflow-auto">
    <header class="col-2 flex mx-4">
      <img class="osol" src="../assets/img/Osol.png" alt="" />
    </header>
    <div class="grid-container">
      <main class="col flex">
        <div class="col mt-8 mx-4 log">
          <h3>Log in</h3>
          <div class="field">
            <label for="email">E-mail</label>
            <div>
              <InputText id="email" class="w-full" type="email" />
            </div>
          </div>
          <div class="field">
            <label for="password">Password</label>
            <div>
              <Password
                class="holder-size"
                :style="{ width: '100%' }"
                :inputStyle="{ width: '100%' }"
                id="password"
                v-model="valuee"
                toggleMask
              />
            </div>
          </div>
          <div class="field">
            <div class="flex justify-content-between w-full mt-5">
              <Button @click="goToListOfOrganizations" class="border-round-2xl w-2 btn"
                ><span class="button-label">Log in</span></Button
              >
              <a class="no-underline mdpp" href="">Forgot password ?</a>
            </div>
          </div>
          <div class="field mt-5">
            <div>
              <SelectButton v-model="value" :options="options" />
            </div>
          </div>
        </div>
        <div class="col">
          <img src="../assets/img/baseOsol.png" alt="" class="img-base" />
        </div>
      </main>
    </div>
    <div class="grid-footer">
      <footer class="col-5 flex mx-4">
        <p class="request">
          For any request, please contact
          <a class="link-to-email" href="mailto:support@osol.com">support@osol.com</a>
        </p>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const valuee = ref(null)
const value = ref('English')
const options = ref(['English', 'French'])
function goToListOfOrganizations() {
  window.location.href = '/list_of_organizations'
}
</script>

<style scoped>
.btn {
  background-color: #40454e;
  font-size: 1rem;
  display: flex;
  align-items: center; /* Centrage vertical */
  justify-content: center;
}
.button-label {
  white-space: nowrap;
}
.request {
  font-size: 1rem;
  margin-top: 10px;
}
.link-to-email {
  color: rgb(152, 152, 219);
  font-size: 1rem;
}
a {
  font-size: 1rem;
  color: #40454e;
}
h3 {
  color: #40454e;
  font-size: 1.3rem;
}
#email {
  font-size: 1rem;
}

.img-base {
  width: 100%;
  margin-left: 16px;
  justify-content: center;
}

.grid-container {
  display: flex;
}
.grid-footer {
  display: flex;
  width: 100%;
}
main {
  height: 100%;
}
.log {
  height: 450px;
}

@media (max-width: 1441px) {
  .log {
    height: 600px;
  }
  .grid-footer {
    margin-top: 20px;
  }
  a,
  .link-to-email,
  .request,
  .btn,
  label,
  .mdpp {
    font-size: 1.5rem;
  }
  h3 {
    font-size: 2rem;
  }
}

@media (max-width: 1250px) {
  a,
  .link-to-email,
  .request,
  .btn,
  label,
  .mdpp {
    font-size: 0.8rem;
  }
  h3 {
    font-size: 1rem;
  }
}

@media (max-width: 1000px) {
  main {
    flex-direction: column;
  }
  .img-base {
    margin-left: -40px;
  }
}
@media (max-width: 750px) {
  .col-5 {
    width: 450px;
  }
  .img-base {
    margin-left: -30px;
  }
}
@media (max-width: 500px) {
  .img-base {
    margin-left: -20px;
  }
  .col-5 {
    width: 90%;
  }
}
@media (max-width: 390px) {
  .btn {
    font-size: 0.6rem;
  }
}
@media (max-width: 340px) {
  .link-to-email,
  .request {
    font-size: 0.7rem;
  }
}
</style>
