<template>
  <header class="head">
       <img v-for="img in imgs" :src="setSrc(img.src)" :class="setClass(img.class)">
       <img class="searchBtn" src="../assets/head/icon-search.png" @click="openSearch">
       <div class="searchPage">
            <div class="header">
                <div class="search">
                  <img src="../assets/head/icon-search.png" >
                </div>
              <div class="close">
                <div v-for="i in 2" class="closeLine" @click="closeSearch"></div>
              </div>
            </div>
       </div>
       <div class="aside" @click="toggleMenu">
              <div v-for="i in 3" class="line">

              </div>
       </div>
  </header>
</template>

<script>
export default {
  name: 'head',
  data () {
    return {
      imgs: []
    }
  },created(){
    this.imgs = [{
      class: 'baijia',
      // 直接使用相对路径无法被webpack打包，必须加上require才行
      src: require('../assets/head/logo-baijia.png')
    }, {
      class: 'baidu',
      src: require('../assets/head/logo-baidu.png')
    }]
  },methods:{
    setSrc(src) {
      return src;
    },
    setClass(className) {
      return className;
    },
    openSearch(){
        var searchPage=document.querySelector('.head .searchPage');
      searchPage.style.display="block"
    },
    closeSearch(){
      var searchPage=document.querySelector('.head .searchPage');
      searchPage.style.display="none"
    },
    toggleMenu(){
      var page=document.querySelector('#app .page');
      var aside=document.querySelector('.head .aside');
      var pageClass=page.className;
      var asideClass=aside.className;
      if(pageClass=="page"){
          page.className='page toggle';
      }else{
        page.className='page';
      }
      if(asideClass=='aside'){
        aside.className='aside closeMenu'
      }else{
        aside.className='aside'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   .head{
        height: 60px;background: #262627;position: relative;
   }
   .head img{
     height: 50px;position: absolute;top:5px;
   }
   .head img.baijia{
    height: 40px;top:10px;left: 10px;
  }
   .head img.baidu{
    right: 30%;
  }
  .aside{
    height: 60px;
    width: 60px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    padding-top: 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
   .line{
     height: 1px;
     width: 25px;
     background: #fff;
     transition: all 0.5s;
   }
   .line:nth-of-type(2){
     margin: 6px 0;
   }

  .searchBtn{
      right: 15%;cursor: pointer;
  }
  .searchPage{
    display: none;
    position: fixed;
    height: 100%;
    width: 100%;
    background: #fff;
    z-index: 999;
  }
    .header{
        height: 60px;
        display: flex;
        justify-content: space-around;
      align-items: center;
      -webkit-box-align: center;
        background: #262627;padding: 0 2%;
   }
   .search{
     height: 40px;
     width: 82%;
     border: 1px solid #eee;
     display: flex;
     display: -webkit-box;
     justify-content: flex-end;

   }
   .close{
       height: 40px;width: 12%;margin-left: 2%;padding-top: 34px;
   }
   .closeLine{
     height: 1px;
     width: 70%;
     background: #fff;
   }
   .closeLine:first-child{
     color: red;
     transform: rotate(45deg);
   }
   .closeLine:last-child{
     color: red;
     transform: rotate(-45deg);
   }
</style>
