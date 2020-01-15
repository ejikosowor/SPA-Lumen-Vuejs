<template>
    <section class="container">
        <div class="row">
            <div class="column"></div>
            <div class="column">
                <h1>Login</h1>
                <form @submit="onSubmit">
                    <fieldset>
                        <label for="email">Email</label>
                        <input id="email" type="email" name="email" placeholder="john@example.com" v-bind:class="{ 'is-invalid' : authError }" v-model="email" required autocomplete="email">
                        <span class="invalid-feedback" role="alert" v-if="authError">{{ authError }}</span>

                        <label for="password">Password</label>
                        <input id="password" type="password" name="password" v-model="password" required autocomplete="current-password">

                        <button type="submit" class="button-primary">
                            Login
                        </button>
                    </fieldset>
                </form>
            </div>
            <div class="column"></div>
        </div>
    </section>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";

    export default {
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