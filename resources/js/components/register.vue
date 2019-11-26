<template>
    <div class="jumbotron">
        <form class="register" @submit.prevent="register">
            <h1>Register</h1>
            <label>User name</label>
            <input
                required
                type="email"
                class="form-control"
                v-model.trim="user.email"
                placeholder="Email address"
                value
            />
            <label>Password</label>
            <input
                required
                type="password"
                class="form-control"
                v-model="user.password"
                name="password"
                id="inputPassword"
                placeholder="Password"
                value
            />
            <label>More Information</label>
            <label>Name</label>
            <input
                required
                type="password"
                class="form-control"
                v-model="user.password"
                name="password"
                id="inputPassword"
                placeholder="Password"
                value
            />
            <label>ETC</label>
            <input
                required
                type="password"
                class="form-control"
                v-model="user.password"
                name="password"
                id="inputPassword"
                placeholder="Password"
                value
            />
            <hr />
            <button class="btn btn-primary" v-on:click.prevent="createUser()">
                Create
            </button>
            <button
                class="btn btn-primary"
                v-on:click.prevent="cancelRegister()"
            >
                Cancel
            </button>
        </form>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            user: {
                email: "",
                password: "",
                user: this.$store.state.user
            }
        };
    },
    methods: {
        cancelRegister: function() {
            this.$emit("cancel-register-user");
        },
        createUser: function(user) {}
    }
};
</script>
