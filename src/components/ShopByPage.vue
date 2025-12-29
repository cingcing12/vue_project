<template>
    <div class="containerShopByPage my-4">
        <div class="containerDropDown">
            <DropdownComponenet name="Headphone Type"/>
            <DropdownComponenet name="price"/>
            <DropdownComponenet name="Reviews"/>
            <DropdownComponenet name="Color"/>
            <DropdownComponenet name="Meterials"/>
            <DropdownComponenet name="Offer"/>
        </div>
        <div class="containerRightDrop">
            <button style="text-wrap: nowrap;" class="btn btn-success rounded-5">Short By</button>
        </div>
    </div>
</template>

<script>
import DropdownComponenet from './DropdownComponenet.vue';
export default{
    name: "ShopByPage",
    components: {DropdownComponenet}
}
</script>

<style scoped>
.containerDropDown{
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.containerShopByPage{
    display: flex;
    justify-content: space-between;
}
</style>