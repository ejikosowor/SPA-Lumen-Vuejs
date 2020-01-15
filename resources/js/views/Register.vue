<template>
    <section class="container">
        <div class="row">
            <div class="column"></div>
            <div class="column">
                <h1>Register</h1>
                <form autocomplete="on">
                    <fieldset>
                        <formInput inputName="name" inputType="text" inputLabel="Name"></formInput>
                        <formInput inputName="display_name" inputType="text" inputLabel="Display Name"></formInput>
                        <formInput inputName="email" inputType="email" inputLabel="Email"></formInput>
                        <formInput inputName="password" inputType="password" inputLabel="Password"></formInput>
                        <formButton inputType="submit" inputLabel="Register"></formButton>
                    </fieldset>
                </form>
            </div>
            <div class="column"></div>
        </div>
    </section>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    import formInput from '../components/FormInput.vue';
    import formButton from '../components/FormButton.vue';

    export default {
        components: {
            formInput,
            formButton
        }
    }
</script>