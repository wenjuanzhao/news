<template>
  <div id="app">
    <div class="page">
      <app-head></app-head>
      <app-nav></app-nav>
      <router-view></router-view>
     <app-foot></app-foot>
    </div>
    <app-menu></app-menu>
  </div>
</template>

<script>
  import AppHead from '@/components/Head'
  import AppMenu from '@/components/Menu'
  import AppNav from '@/components/Nav'
  import AppFoot from '@/components/Foot'
export default {
  name: 'app',
  components:{
      'app-head':AppHead,
      'app-menu':AppMenu,
      'app-nav':AppNav,
      'app-foot':AppFoot
  }
}
</script>

<style>
  html{
    width: 100%;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.page{
  position: relative;
  z-index: 99;
  transition: all 0.5s;
}
.toggle{
  transform: translateX(-120px);
}
</style>
