<template>
    <main class="wrapper">
        <router-view></router-view>
    </main>
</template>

<script>
    import pagecontent from './partials/Content.vue'

    export default {
        components: {
            pagecontent
        }
    }
</script>