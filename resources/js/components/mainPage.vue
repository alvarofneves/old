<template>
  <div>
    <div class="jumbotron">
      <h1>{{ title }}</h1>
    </div>
    <div v-if="!this.$store.state.isLogged">
      <login>

      </login>
    </div>
    <div v-if="this.$store.state.isLogged">
      <users></users>
    </div>
  </div>
</template>

<script>
import LoginComponent from "./login";
import UsersComponent from "./users";

export default {
  props: ["user"],
  data: function() {
    return {
      title: "Virtual Wallet",
      editingUser: false,
      showSuccess: false,
      showFailure: false,
      successMessage: "",
      failMessage: "",
      currentUser: null,
      users: [],
      //isLogged: false
    };
  },
  methods: {
    getUsers: function() {
      axios.get("api/users").then(response => {
        this.users = response.data.data;
      });
    },
    changeLoginState: function(user){
        this.$store.commit("setUser", user);
        //this.isLogged = true;

    }

    /*cancelLogin: function () {
                this.showSuccess = false;
                this.editingUser = false;
                axios.get('api/users/' + this.currentUser.id)
                    .then(response => {
                        console.dir(this.currentUser);
                        // Copies response.data.data properties to this.currentUser
                        // without changing this.currentUser reference
                        Object.assign(this.currentUser, response.data.data);
                        console.dir(this.currentUser);
                        //this.$refs.UserListReference.currentUser = null;
                    });
            }*/
  },
  mounted() {
    console.log("Component mounted.");
    this.getUsers();
  },
  computed: {
    isLogged: function() {
      // `this` points to the vm instance
      return this.$store.state.isLogged;
    }
  },
  components: {
    login: LoginComponent,
    users: UsersComponent
  }
};
</script>
