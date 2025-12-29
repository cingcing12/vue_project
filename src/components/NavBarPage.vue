<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container">

            <router-link to="/" class="nav-link navbar-brand fw-bold fs-2">Headphone <span>shop</span></router-link>
            
<button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" data-bs-dismiss="offcanvas" id="offcanvasExampleLabel"><router-link to="/" class="nav-link navbar-brand fw-bold fs-2">Headphone <span>shop</span></router-link></h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <ul class="navbar-nav navbar-pills justify-content-end flex-grow-1 text-center">
        <li class="nav-item" data-bs-dismiss="offcanvas"><router-link to="/" active-class="active"  class="nav-link">Home</router-link></li>
        <li class="nav-item" data-bs-dismiss="offcanvas"><router-link to="/about" active-class="active"  class="nav-link">About</router-link></li>
        <li class="nav-item" data-bs-dismiss="offcanvas"><router-link to="/contact" active-class="active"  class="nav-link">Contact</router-link></li>
        <li class="nav-item" data-bs-dismiss="offcanvas"><a href="#" class="nav-link">Cart (0)</a></li>
        <li class="nav-item ms-lg-2 ms-0" data-bs-dismiss="offcanvas"><router-link to="/login" active-class="active"  class="nav-link goform mt-lg-0 mt-3 mb-lg-0 mb-3">Login</router-link></li>
        <li class="nav-item ms-lg-2 ms-0" data-bs-dismiss="offcanvas"><router-link to="/register" active-class="active"  class="nav-link goform">Register</router-link></li>
    </ul>
  </div>
</div>
        </div>
    </nav>
</template>

<script>

export default{
    name: "NavBarPage",
    emits: ["click-rout"],

    watch: {
  $route(to, from) {
    const authRoutes = ["/login", "/register"];

    // entering login/register
    if (authRoutes.includes(to.path)) {
      this.$emit("click-rout", false);
      return;
    }

    // leaving login/register (back or forward)
    if (authRoutes.includes(from.path)) {
      this.$emit("click-rout", true);
      return;
    }
  }
}

    
}
</script>

<style scoped>

.nav-link{
    font-weight: bold;
    color: gray;
}

.nav-link.active{
    color: green;
}

.nav-link.goform{
    background-color: rgb(37, 170, 37);
    border-radius: 50px;
    color: white;
    padding: 10px 20px;
    width: fit-content;
    display: flex;
    justify-content: center;
}

.navbar-brand{
    color: black;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

    & span{
        color: rgb(16, 206, 16);
    }
}
.nav-item.ms-0{
    display: flex;
    justify-content: center;
}
</style>