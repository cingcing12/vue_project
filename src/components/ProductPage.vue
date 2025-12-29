<template>
    <h2 class="fs-2 fw-bold">Headphone For You!</h2>
    <div class="cartProduct my-5">
        <div class="productItem" v-for="data in product" :key="data.id" :data-id="data.id">
            <div class="containerImg">
                <img :src="data.imgUrl" :alt="data.name">
            </div>
            <div class="containerContent my-4">
                <h6 class="title">{{ data.name }}</h6>
                <div class="containerrateAPrice d-flex justify-content-between">
                    <div class="containerRate">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                </div>
                <div class="containerPrice">
                    <h6>${{ data.price.toFixed(2) }}</h6>
                </div>
                </div>
                <div class="containerBtnAdd my-2">
                    <button class="addToCart" @click="handleAddToCart">Add to cart</button>
                </div>
            </div>
            <router-link :to="`productdetail?id=${data.id}&product_name=${data.name}`">Details</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductPage",
    data(){
        return{
            product: []
        }
    },
    methods: {
        async handleApi() {
            try {
                const res = await fetch('https://vue-project-i8he.onrender.com');
                const data = await res.json();
                this.product = data;
                console.log(this.product)
            }catch(err){
                console.log(err.message)
            }
        },

        handleAddToCart(e){
            const cartItem = e.target.closest(".productItem");
            console.log(cartItem)
        }
    },

    mounted() {
        this.handleApi();
    }
}
</script>

<style scoped>
.cartProduct{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
}

.containerImg img{
    width: 100%;
    transition: .5s ease;
}

.title{
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}

.containerImg{
    overflow: hidden;
}

.productItem:hover img{
    transform: scale(1.1);
}
.bi-star-fill , .bi-star-half{
    color: rgb(13, 178, 13);
}
.addToCart{
    border-radius: 50px;
    background-color: rgb(27, 207, 27);
    color: white;
    font-weight: bold;
    padding: 5px 20px;
    border: none;
}
@media(max-width: 768px){
    .cartProduct{
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>