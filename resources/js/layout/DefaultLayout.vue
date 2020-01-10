<template>
    <div class="wrapper">
        <navbar></navbar>

        <main class="py-4">
            <pagecontent></pagecontent>
        </main>
    </div>
</template>

<script>
    import navbar from './partials/Navbar.vue';
    import pagecontent from './partials/Content.vue'

    export default {
        components: {
            navbar,
            pagecontent
        }
    }
</script>

<style>

</style>