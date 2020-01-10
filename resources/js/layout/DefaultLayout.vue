<template>
    <div class="wrapper">
        <navbar></navbar>

        <main class="py-4">
            <div class="container">
                <div class="row justify-content-center">
                    <router-view></router-view>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import navbar from './partials/Navbar.vue';

    export default {
        components: {
            navbar
        }
    }
</script>

<style>

</style>