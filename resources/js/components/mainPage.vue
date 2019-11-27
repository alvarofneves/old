<template>
    <div>
        <div v-if="!this.$store.state.isLogged" align="center">
            <!-- <div v-if="!registerUserState">
        <login @begin-register-user="beginRegisterUser" />
      </div>
      <div v-if="registerUserState">
        <register @cancel-register-user="cancelRegisterUser" />
      </div>
  -->

            <h1>Welcome To VirtualWallets</h1>
            <br><br>
            <div>
                <h2>Total Wallets</h2>
                <h1>{{ this.wallets.length }}</h1>
            </div>
            <br><br>
            <login></login>
        </div>

        <div v-if="this.$store.state.isLogged">
            <h1>Welcome, {{ this.$store.state.user.name }}</h1>
            <h2>Total Virtual Wallets {{ wallets.lenght }}</h2>
            <!-- <wallets></wallets> -->
            <users></users>
        </div>
    </div>
</template>

<script>
import LoginComponent from "./login";
import UsersComponent from "./users";
import RegisterComponent from "./register";
import WalletsComponent from "./wallets";
import MovementsComponent from "./movements";

export default {
    props: ["user"],
    data: function() {
        return {
            editingUser: false,
            showWelcome: false,
            showSuccess: false,
            showFailure: false,
            successMessage: "",
            failMessage: "",
            currentUser: null,
            users: [],
            registerUserState: false,
            wallets: [],
            walletsCount: null
            //isLogged: false
        };
    },
    methods: {
        getUsers: function() {
            axios.get("api/users").then(response => {
                this.users = response.data.data;
            });
        },
        beginRegisterUser: function() {
            this.registerUserState = true;
        },
        cancelRegisterUser: function() {
            this.registerUserState = false;
        },
        changeLoginState: function(user) {
            this.$store.commit("setUser", user);
            //this.isLogged = true;
        },
        getWallets: function() {
            axios.get("api/wallets").then(response => {
                this.wallets = response.data.data;
            });
            /* walletsCount=this.wallets.lenght; */
        },
        changeLoginState: function(user) {
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
        this.getWallets();
        console.log(this.wallets);
    },
    computed: {
        isLogged: function() {
            // `this` points to the vm instance
            return this.$store.state.isLogged;
        }
    },
    components: {
        login: LoginComponent,
        users: UsersComponent,
        register: RegisterComponent,
        users: UsersComponent,
        wallets: WalletsComponent
    }
};
</script>
