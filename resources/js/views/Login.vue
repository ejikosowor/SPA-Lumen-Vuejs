<template>
    <section class="container">
        <div class="row">
            <div class="column"></div>
            <div class="column">
                <h1>Login</h1>
                <form @submit="onSubmit" autocomplete="on">
                    <fieldset>
                        <formInput inputName="email" inputType="email" inputLabel="Email" :inputErr="authError" v-model="email"></formInput>
                        <formInput inputName="password" inputType="password" inputLabel="Password" v-model="password"></formInput>
                        <formButton inputType="submit" inputLabel="Login"></formButton>
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
        },
        data() {
            return {
                email: "",
                password: ""
            }
        },
        computed: {
            ...mapGetters('auth', [
                'authError'
            ])
        },
        methods: {
            ...mapActions('auth', ['login']),
            onSubmit(event) {
                event.preventDefault();
                this.login({ email: this.email, password: this.password });
            }
        }
    }
</script>