<template>
    <div class="containerProductDetail">
        <h2 class="fw-bold">Product Detail</h2>
        <h6 class="text-secondary">Head Phone</h6>

        <div v-if="productDetail" id="containerProductDetail">
            <div class="containerImg">
                <img @click="handleImg" :src="productDetail.imgUrl" :alt="productDetail.name" id="imgProduct"/>
            </div>
            <div class="containerConent">
                <h2 class="fs-2">{{ productDetail.name }}</h2>
                <h4 class="fs-4">${{ productDetail.price.toFixed(2) }}</h4>
                <div class="containerRate">
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-half"></i>
                </div>
                <p>{{ productDetail.description || "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."}}</p>
                <button class="btn btn-success mt-2">Add to cart</button>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: "ProductDetail",

    data(){
        return{
            productDetail: null
        }
    },

    methods:{
        async handleProductDetail(){
            const param = new URLSearchParams(window.location.search);
            const id = param.get('id');
            const name = param.get('product_name');
            if(!id || !name){
                window.location.href = "404.html"
                return;
            }
            try{
                const res = await fetch(`http://localhost:3000/productDetail/${id}?name=${name}`);
                const data = await res.json();
                if(res.ok){
                    this.productDetail = data;
                }
            }catch(err){
                console.log(err.message);
            }
        },

        handleImg(e){
    const imgClone = e.target.cloneNode();
    imgClone.style.maxWidth = '90%';
    imgClone.style.maxHeight = '90%';
    imgClone.style.objectFit = 'contain';
    imgClone.style.borderRadius = '8px';
    document.body.style.overflow = "hidden";
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.background = 'rgba(0,0,0,0.6)';
    overlay.style.zIndex = '9999';
    overlay.style.cursor = "zoom-out";

    overlay.appendChild(imgClone);
    document.body.appendChild(overlay);

    overlay.addEventListener('click', () => {
        overlay.remove();
        document.body.style.overflow = "visible";
    });
}

    },

    mounted(){
        this.handleProductDetail();

    }
}
</script>

<style scoped>
    .bi-star-fill , .bi-star-half{
    color: rgb(13, 178, 13);
}

#containerProductDetail{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
}
.containerImg img{
    width: 100%;
    cursor: zoom-in;
}


@media(max-width:991px){
    #containerProductDetail{
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>