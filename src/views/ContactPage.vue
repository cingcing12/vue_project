<template>
    <div class="containerContact">
        <div class="leftContainer">
            <h2 class="fs-2 fw-bold">Chat Our Company</h2>
            <p>Need help with something? What a demo? Get in touch with our friendly team and we'll get in touch within
                2 hours.</p>

                <form id="form">
                <div class="row">
                    <div class="col-6">
                        <div class="form-floating">
                    <input type="text" class="form-control" id="fname" placeholder="name@example.com">
                    <label for="fname">First Name</label>
                </div>
                    </div>
                <div class="col-6">
                    <div class="form-floating">
                    <input type="text" class="form-control" id="lname" placeholder="Password">
                    <label for="lname">Last Name</label>
                </div>
                </div>
                <div class="col-12 my-3">
                    <div class="form-floating">
                    <input type="text" class="form-control" id="jop" placeholder="Password">
                    <label for="jop">Jop Title</label>
                </div>
                </div>
                <div class="col-12">
                    <div class="form-floating">
                    <input type="email" class="form-control" id="email" placeholder="Password">
                    <label for="email">Email</label>
                </div>
                </div>
                <div class="col-12 my-3">
                    <div class="form-floating">
                    <input type="text" class="form-control" id="phone" placeholder="Password">
                    <label for="phone">Phone</label>
                </div>
                </div>
            </div>

            <button class="btn btn-dark">Get in touch</button>
            </form>
        </div>

        <div class="rightContainer">
            <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_411_FIs_desktop_1__2_copy.jpg?v=1752662212" alt="head phone contact">
        </div>
    </div>
</template>

<script>
export default {
    name: "ContactPage"
}
</script>

<style scoped>
    .rightContainer img{
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
    }

    .containerContact{
        display: flex;
        gap: 20px;
    }

    .rightContainer{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media(max-width:991px){
        .containerContact{
            flex-direction: column-reverse;
        }
    }
</style>