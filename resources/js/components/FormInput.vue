<template>
    <div class="form-group">
        <label :for="inputName">{{ inputLabel }}</label>
        <input :id="inputName" :type="inputType" :name="inputName" :class="{ 'is-invalid' : inputErr }" required>
        <span class="invalid-feedback" role="alert" v-if="inputErr">{{ inputErr }}</span>
    </div>
</template>

<script>
    export default {
        props: {
            inputErr: String,
            inputName: String,
            inputType: String,
            inputLabel: String
        }
    }
</script>