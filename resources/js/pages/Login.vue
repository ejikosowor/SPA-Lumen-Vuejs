<template>
    <div class="col-md-4">
        <div class="card">
            <div class="card-body py-0">
                <div class="row">
                    <div class="col-md-12">
                        <div class="p-2">
                            <form method="POST" @submit="onSubmit">
                                <div class="form-group">
                                    <label for="email" class="mb-0">E-Mail Address</label>
                                    <input id="email" type="email" class="form-control mt-0" name="email" v-model="email" required autocomplete="email" autofocus>
                                </div>

                                <div class="form-group">
                                    <label for="password" class="mb-0">Password</label>
                                    <input id="password" type="password" class="form-control mt-0" name="password" v-model="password" required autocomplete="current-password">
                                </div>

                                <div class="form-group">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="remember" id="remember">

                                        <label class="form-check-label" for="remember">
                                            Remember Me
                                        </label>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary">
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
        methods: {
            ...mapActions('auth', ['login']),
            onSubmit(event) {
                event.preventDefault();
                this.login({ email: this.email, password: this.password });
            }
        }
    }
</script>