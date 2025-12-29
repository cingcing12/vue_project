<template>
    <div class="container-fluid">
        <div class="container">
            <div class="containerTopFooter">
                <div class="containerLogo">
                    <router-link class="fs-2 logo nav-link" to="/">Headphone <span>shop</span></router-link>
                </div>

                <div class="containerLinkIcon">
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-linkedin"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-pinterest"></i>
                    <i class="bi bi-youtube"></i>
                </div>
            </div>

            <div class="footerGrid">
                <ul class="navbar-nav">
                    <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">About</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item"><a href="#" class="nav-link">Blog</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Product</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Login</a></li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item"><a href="#" class="nav-link"><i class="bi bi-geo-alt-fill"></i> Kandal, Phnom Penh, Cambodia</a></li>
                    <li class="nav-item"><a href="#" class="nav-link"><i class="bi bi-telephone-fill"></i> +855 097 5969 245</a></li>
                    <li class="nav-item"><a href="#" class="nav-link"><i class="bi bi-envelope-fill"></i> vongsokpheak@gmail.com</a></li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item"><a href="#" class="nav-link"><i class="bi bi-geo-alt-fill"></i> Kandal, Phnom Penh, Cambodia</a></li>
                    <li class="nav-item"><a href="#" class="nav-link"><i class="bi bi-telephone-fill"></i> +855 097 5969 245</a></li>
                    <li class="nav-item"><a href="#" class="nav-link"><i class="bi bi-envelope-fill"></i> vongsokpheak@gmail.com</a></li>
                </ul>
            </div>

            <p class="reverseDesign">©2025. All rights reversed.</p>
        </div>
    </div>
</template>

<script>
export default{
    name: "FooterPage"
}
</script>

<style scoped>
.container-fluid{
    background-color: rgb(45, 44, 44);
    margin-top: 20px;
}

.container{
    padding-block: 40px;
}

.logo{
    color: white;
    font-weight: bold;

    & span{
        color: rgb(37, 170, 37);
    }
}

.containerTopFooter{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.containerLinkIcon{
    display: flex;
    gap: 20px;

    & i{
        color: white;
    }
}

.footerGrid{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin-block: 10px;
    color: gray;
    gap: 20px;

    & a{
        font-size: 12px;
    }
}

.reverseDesign{
    margin-top: 20px;
    color: gray;
    font-weight: bold;
    font-size: 12px;
}

@media(max-width: 768px){
    .footerGrid{
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>