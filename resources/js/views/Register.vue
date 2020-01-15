<template>
    <section class="container">
        <div class="row">
            <div class="column"></div>
            <div class="column">
                <h1>Register</h1>
                <form @submit="onSubmit" autocomplete="off">
                    <fieldset>
                        <formInput inputName="name" inputType="text" inputLabel="Name" :inputErr="errName" v-model="name"></formInput>
                        <formInput inputName="display_name" inputType="text" inputLabel="Display Name" :inputErr="errDisplayName" v-model="display_name"></formInput>
                        <formInput inputName="email" inputType="email" inputLabel="Email" :inputErr="errEmail" v-model="email"></formInput>
                        <formInput inputName="password" inputType="password" inputLabel="Password" :inputErr="errPassword" v-model="password"></formInput>
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
        },
        data() {
            return {
                name: "",
                display_name: "",
                email: "",
                password: ""
            };
        },
        computed: {
            ...mapGetters('registration', [
                'error'
            ]),
            errName() {
                return this.error.name ? this.error.name[0] : '';
            },
            errDisplayName() {
                return this.error.display_name ? this.error.display_name[0] : '';
            },
            errEmail() {
                return this.error.email ? this.error.email[0] : '';
            },
            errPassword() {
                return this.error.password ? this.error.password[0] : '';
            }
        },
        methods: {
            ...mapActions('registration', ['register']),
            onSubmit(event) {
                event.preventDefault();
                this.register({ name: this.name, display_name: this.display_name, email: this.email, password: this.password})
            }
        }
    }
</script>