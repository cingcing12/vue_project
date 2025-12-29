<template>
  <div id="app">
    <NavBarPage v-if="isTrue"/>
  <div class="container py-lg-4 py-3">
    <router-view></router-view>
  </div>
  <FooterPage v-if="isTrue"/>
  </div>
</template>

<script>

import NavBarPage from './components/NavBarPage.vue';
import FooterPage from './components/FooterPage.vue';

export default {
  name: 'App',
  components: {
    NavBarPage,
    FooterPage
  },


  data(){
    return{
      isTrue: true
    }
  },


  methods:{
    handleRout(e){
      this.isTrue = e;
    },
  },

 


  
}
</script>

