<template>
    <section class="containerHomePage">
        <div class="containerLeftContent text-lg-start text-center">
                <div class="tilteHomepage">
                    <h2 class="fw-bold ">Grap Upto 50% Off On Selected Headphone</h2>
                </div>  
                <div class="buttonHomePage">
                    <button class="btn btn-success fw-bold px-4 py-2">But Now!</button>
                </div>
        </div>

        <div class="containerRight">
            <div class="imageItemHome">
                <img src="../assets/home-image.png" alt="">
            </div>
        </div>
    </section>
</template>

<script>
export default{
    name: "SectionHomePage"
}
</script>

<style scoped>
.containerLeftContent{
    display: flex;
    gap: 20px;
    flex-direction: column;
    padding: 50px;
}

.containerHomePage{
    background-color :antiquewhite;
    border-radius: 20px;
}

.containerHomePage{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    justify-content: center;
    align-items: center;
}

.containerRight img{
    width: 100%;
}
.containerRight{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.imageItemHome{
    display: flex;
    justify-content: center;
}
</style>