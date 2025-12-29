<template>
    <div class="containerAbout text-center">
        <h2 class="fs-2 fw-bold">About Headphone company shop.</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        <button class="btn btn-success">START FREE TRAIL</button>
    </div>

    <div class="containerAboutBottom mt-4">
        <h2 class="fs-2 text-center">The plateform is design with build-in, enterprise-level security.</h2>
        <img src="https://i.rtings.com/assets/pages/itVDUgxM/best-headphones-20240517-medium.jpg?format=auto" alt="head phone about">
    </div>
</template>

<script>
export default {
    name: "AboutPage"
}
</script>

<style scoped>
    .containerAbout{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 50vh;
        flex-direction: column;
    }

    .containerAbout p{
        max-width: 700px;
        width: 100%;
    }

    .containerAboutBottom img {
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
        border-radius: 20px;
    }

    .containerAboutBottom {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;
    }

    .containerAboutBottom h1{
        max-width: 700px;
        width: 100%;
    }

   
</style>