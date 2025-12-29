<template>
    <SectionHomePage />
    <ShopByPage />
    <ProductPage />
</template>

<script>
import SectionHomePage from '@/components/SectionHomePage.vue';
import ShopByPage from '@/components/ShopByPage.vue';
import ProductPage from '@/components/ProductPage.vue';

export default {
    name: "HomePage",
    components: {SectionHomePage, ShopByPage, ProductPage}
}
</script>