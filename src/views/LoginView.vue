<template>
  <div class="mx-4">
    <img src="../assets/img/Osol.png" alt="" />
  </div>
  <div class="grid">
    <div class="col marginTop mx-5">
      <h3>Log in</h3>
      <div class="field">
        <label for="email">E-mail</label>
        <div>
          <InputText id="email" class="w-full" placeholder="Enter your Email" type="email" />
        </div>
      </div>
      <div class="field w-full">
        <label for="password">Password</label>
        <div>
          <Password id="password" placeholder="Enter your Password" v-model="valuee" toggleMask />
        </div>
      </div>
      <div class="field">
        <div class="flex justify-content-between w-full mt-5">
          <Button @click="goToDashboard" class="border-round-2xl w-2 btn" label="Log in"></Button>
          <a class="no-underline" href="">Forgot password ?</a>
        </div>
      </div>
      <div class="field mt-5">
        <div>
          <SelectButton v-model="value" :options="options" />
        </div>
      </div>
      <p class="request">
        For any request, please contact
        <a class="link-to-email" href="mailto:support@osol.com">support@osol.com</a>
      </p>
    </div>
    <div class="col-md-4 p-0">
      <img src="../assets/img/baseOsol.png" alt="" class="img-base" />
    </div>
  </div>
  
</template>

<script setup lang="ts">
import { ref } from 'vue'
const valuee = ref(null)
const value = ref('English')
const options = ref(['English', 'French'])
function goToDashboard() {
  window.location.href = '/dashboard'
}
</script>

<style>
#password {
  width: 100%;
}
#password > input {
  width: 100%;
}
.btn {
  background-color: #40454e;
  font-size: 14px;
}
.request {
  font-size: 14px;
  margin-top: 9rem;
}
.link-to-email {
  color: rgb(152, 152, 219);
  font-size: 14px;
  font-family: Arial, sans-serif;
}
a {
  font-size: 14px;
  color: #40454e;
}
h3 {
  color: #40454e;
  font-size: 24px;
}
::placeholder {
  font-size: 14px;
}


@media (max-width: 1200px) {
  .grid {
    display: flex;
    flex-direction: column;
  }

  .col-md-4 {
    width: 100%;
  }

  .col-md {
    width: 100%;
  }
}

.marginTop {
  margin-top: 7%;
}

@media (min-width: 1199px) {
  body::-webkit-scrollbar {
    display: none;
  }
  body {
    overflow: hidden;
  }
}
</style>
