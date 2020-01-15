<template>
    <button :type="inputType" class="button-primary">{{ inputLabel }}</button>
</template>

<script>
    export default {
        props: {
            inputType: String,
            inputLabel: String
        }
    }
</script>