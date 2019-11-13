<template>
    <div>
         <div class="jumbotron">
            <h1>{{ title }}</h1>
        </div>
        <div v-if="!this.$store.state.user">
        <login>
        </login>
        </div>
        <div v-if="this.$store.state.user">
            <users></users>
        </div>

        
    </div>
</template>

<script>
    import LoginComponent from './login';
    import UsersComponent from './users';

    export default {
        data: function () {
            return {
                title: 'Virtual Wallet',
                editingUser: false,
                showSuccess: false,
                showFailure: false,
                successMessage: '',
                failMessage: '',
                currentUser: null,
                users: [],
            };
        },
        methods:{
            getUsers: function () {
                axios.get('api/users')
                    .then(response => { this.users = response.data.data; });
            },
            login: function (user) {
                this.editingUser = false;
                axios.put('api/users/' + user.id, user)
                    .then(response => {
                        this.showSuccess = true;
                        this.successMessage = 'User Saved';
                        // Copies response.data.data properties to this.currentUser
                        // without changing this.currentUser reference
                        Object.assign(this.currentUser, response.data.data);
                        this.currentUser = null;
                        this.editingUser = false;
                        //this.$refs.UserListReference.currentUser = null;
                    });
            },
            cancelLogin: function () {
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
            }
        },
        mounted() {
            console.log('Component mounted.');
            this.getUsers();
        },
        components:{
            'login':LoginComponent,
            'users':UsersComponent
        }
    }
</script>
