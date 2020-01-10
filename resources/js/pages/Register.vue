<template>
    <div class="col-md-4">
        <div class="card">
            <div class="card-body py-0">
                <div class="row">
                    <div class="col-md-12">
                        <div class="p-2">
                            <form method="POST" action="#">
                                <div class="form-group">
                                    <label for="name" class="mb-0">Name</label>
                                    <input id="name" type="text" class="form-control mt-0" name="name" required autocomplete="name" autofocus>
                                </div>
                                <div class="form-group">
                                    <label for="display_name" class="mb-0">Display Name</label>
                                    <input id="display_name" type="text" class="form-control mt-0" name="display_name" required autofocus>
                                </div>
                                <div class="form-group">
                                    <label for="email" class="mb-0">E-Mail Address</label>
                                    <input id="email" type="email" class="form-control mt-0" name="email" required autocomplete="email" autofocus>
                                </div>

                                <div class="form-group">
                                    <label for="password" class="mb-0">Password</label>
                                    <input id="password" type="password" class="form-control mt-0" name="password" required autocomplete="current-password">
                                </div>

                                <div class="form-group">
                                    <label for="password-confirm" class="mb-0">Confirm Password</label>
                                    <input id="password-confirm" type="password" class="form-control mt-0" name="password_confirmation" required autocomplete="new-password">
                                </div>

                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary">
                                        Register
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
    export default {

    }
</script>