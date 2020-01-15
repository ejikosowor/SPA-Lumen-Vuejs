<template>
    <div class="form-group">
        <label :for="inputName">{{ inputLabel }}</label>
        <input :id="inputName" :type="inputType" :name="inputName" :class="{ 'is-invalid' : inputErr }" v-model="inputVal" required>
        <span class="invalid-feedback" role="alert" v-if="inputErr">{{ inputErr }}</span>
    </div>
</template>

<script>
    export default {
        props: {
            inputErr: String,
            inputName: String,
            inputType: String,
            inputLabel: String,
            value: String
        },
        computed: {
            inputVal: {
                get() {
                    return this.value;
                },
                set(val) {
                    this.$emit('input', val);
                }
            }
        }
    }
</script>