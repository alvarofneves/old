<template>
  <div class="jumbotron">
    <form class="login" @submit.prevent="login">
      <h1>{{title}}</h1>
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
      <button class="btn btn-primary" v-on:click.prevent="userLogin()">Login</button>
    </form>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      title:"Login",
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
    }
  }
};
</script>