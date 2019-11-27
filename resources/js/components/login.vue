<template>
    <div class="jumbotron" 
    align="left" 
    padding-top= "20%">
        <form class="login" @submit.prevent="login">
            <h1>{{ title }}</h1>
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
            <hr />
            <button class="btn btn-primary" v-on:click.prevent="userLogin()">
                Login
            </button>
            <button class="btn btn-secondary" v-on:click.prevent="registerUser()">
                Register
            </button>
        </form>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            title: "Login",
            user: {
                email: "",
                password: "",
                user: this.$store.state.user
            }
        };
    },
    methods: {
        userLogin: function(user) {
            this.editingUser = false;
            axios
                .post("api/login", this.user)
                .then(response => {
                    this.$store.commit("setToken", response.data.access_token);
                    axios.get("/api/user").then(response => {
                        this.$store.commit("setUser", response.data);
                        //this.$emit("change-login-state", response.data);
                    });
                })
                .catch(error => {
                    /*  this.$store.commit('clearUserAndToken');
                        this.typeofmsg = "alert-danger";
                        this.message = "Invalid credentials";
                        this.showMessage = true; */
                    console.log("Cannot log in");
                });
        },
        registerUser: function() {
            this.$emit("begin-register-user");
        }
    }
};
</script>
<style scoped>
.jumbotron{
    padding-top: 2%;
    padding-bottom: 2%;
    padding-left: 5%;
    padding-right: 5%;
    align-content: left;
    width: 50%;
}
.form-control{
    width: 100%;
}

</style>
