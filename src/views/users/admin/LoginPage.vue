<template>
    <div class="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">
	<form class="flex flex-col bg-white rounded shadow-lg p-12 mt-12" @submit.prevent="login">
		<label class="font-semibold text-xs" for="usernameField">Username</label>
		<input class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" v-model="username">
		<label class="font-semibold text-xs mt-3" for="passwordField">Password</label>
		<input class="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" v-model="password">
		<button class="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700">Login</button>
	<!-- Component End  -->
    </form>
</div>
</template>

<script>
export default {
    data(){
        return{
            username: '',
            password: '',
        }
    },

    methods:{
        login(){
            if(this.$data.username == "admin" && this.$data.username == "admin"){
                console.log("welcome");
                this.$router.push('/admin-home')
            }
            else{
                console.log("failed")
            }
        }
    }
}
</script>