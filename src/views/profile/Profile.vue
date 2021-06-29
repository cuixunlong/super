<template>
  <div id="profile">
    <nav-bar class="nav-bar">
      <div slot="center">我的</div>
    </nav-bar>
    <div><img src="../../assets/img/profile/0fc61b298b3cb855ee2a6780a18321b.png" alt=""></div>
  </div>
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar'
  export default {
    name: "Profile",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .nav-bar {
    background: #ff7b92;
    color: #fff;
  }
</style>