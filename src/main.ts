/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */

import './assets/styles/style.css'
import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import Menubar from 'primevue/menubar'
import 'primeicons/primeicons.css'
import InputText from 'primevue/inputtext'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'
import Badge from 'primevue/badge'
import Card from 'primevue/card'
import '/node_modules/primeflex/primeflex.css'
import Menu from 'primevue/menu'
import Toast from 'primevue/toast'
import Sidebar from 'primevue/sidebar'
import Password from 'primevue/password'
import Button from 'primevue/button'
import AutoComplete from 'primevue/autocomplete'
import SelectButton from 'primevue/selectbutton'
import Divider from 'primevue/divider'
import Ripple from 'primevue/ripple'
import Image from 'primevue/image'
import TabView from 'primevue/tabview'
import TabPanel from 'primevue/tabpanel'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ColumnGroup from 'primevue/columngroup' // optional
import Row from 'primevue/row' // optional
import MultiSelect from 'primevue/multiselect'
import axios from 'axios'

const app = createApp(App)

app.use(router)
app.use(PrimeVue, { ripple: true })
app.directive('ripple', Ripple)
app.component('Password', Password)
app.component('Divider', Divider)
app.component('Image', Image)
app.component('AutoComplete', AutoComplete)
app.component('SelectButton', SelectButton)
app.component('Toast', Toast)
app.component('Sidebar', Sidebar)
app.component('Menu', Menu)
app.component('Card', Card)
app.component('Avatar', Avatar)
app.component('InputText', InputText)
app.component('Menubar', Menubar)
app.component('Button', Button)
app.component('Badge', Badge)
app.component('Tag', Tag)
app.component('TabView', TabView)
app.component('TabPanel', TabPanel)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('ColumnGroup', ColumnGroup)
app.component('Row', Row)
app.component('MultiSelect', MultiSelect)
app.config.globalProperties.$axios = axios
library.add(fas)
library.add(far)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
