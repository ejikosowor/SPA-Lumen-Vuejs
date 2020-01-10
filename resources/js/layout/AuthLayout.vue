<template>
    <div class="wrapper">
        <main class="centered">
            <pagecontent></pagecontent>
        </main>
    </div>
</template>

<script>
    import pagecontent from './partials/Content.vue'

    export default {
        components: {
            pagecontent
        }
    }
</script>

<style lang="scss" scoped>
    .centered {
        display: -webkit-box;
        display: flex;
        -webkit-box-align: center;
                align-items: center;
        min-height: calc(100% - 1rem);
    }

    .centered::before {
        display: block;
        height: calc(100vh - 1rem);
        content: "";
    }

    @media (min-width: 576px) {
        .modal-dialog-centered {
            min-height: calc(100% - 3.5rem);
        }

        .modal-dialog-centered::before {
            height: calc(100vh - 3.5rem);
        }
    }
</style>