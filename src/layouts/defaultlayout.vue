<template>
  <div>
    <header class="d-flex justify-content-around mb-1">
      <router-link to="/">Logo</router-link>
    </header>
    <div class="d-flex justify-content-beetwen wrapper">
      <main class="pl-1 pr-2">
        <router-view />
      </main>
    </div>
    <footer class="d-flex justify-content-center mt-1">
      <span>Footer</span>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
header {
  background-color: rgb(87, 87, 224);
  color: white;
  padding: 1rem 0;

  box-shadow: 0 0 15px 0 rgb(87, 87, 224);

  a {
    color: white;
    font-size: 28px;
    font-weight: 500;
  }
  a:hover {
    text-decoration: none;
  }
}

.wrapper {
  min-height: 100vh;
  main {
    width: 100vw;
  }
}

footer {
  background-color: rgb(87, 87, 224);
  color: white;
  padding: 1rem 0;
  box-shadow: 0 0 15px 0 rgb(87, 87, 224);
}
</style>
