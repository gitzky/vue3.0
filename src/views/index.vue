<template>
<div class="index">
    <img alt="Vue logo" src="../assets/logo.png">
    <router-link to="/a">go to a</router-link>
    <router-link to="/b">go to b</router-link>
    <a @click="goFoo">foo</a>
    <router-view></router-view>
  </div>
</template>
<style scoped>
.index{text-align: center;}
img{display: block;margin: auto;}
a{margin: 20px;text-decoration: underline;cursor: pointer;}
</style>
<script>

export default {
    setup() {
        
    },
    methods: {
        goFoo(){
            this.$router.push("/foo")
        }
    }
}
</script>

