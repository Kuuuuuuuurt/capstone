<template>
<section class="antialiased text-gray-600 h-screen px-2">
    <div class="flex flex-col justify-center">
      <!-- Table -->
      <div
        class="
          w-full
          max-w-2xl
          mx-auto
          bg-white
          shadow-lg
          rounded-sm
          border border-gray-200
          my-5
        "
      >
        <header class="px-5 py-4 border-b border-gray-100">
          <h2 class="font-semibold text-gray-800">QR Code Application Approval</h2>
              <a href="#">
            <button
              class="
                bg-green-500
                hover:bg-green-700
                text-white
                py-1
                px-3
                sm
                rounded-full
                mt-3
              "
            >
              QR-Application
            </button>
          </a>

           <a href="#">
            <button
              class="
                bg-blue-500
                hover:bg-blue-700
                text-white
                py-1
                px-3
                sm
                rounded-full
                mt-3
                ml-1
              "
            >
              Entry Records
            </button>
          </a>

        </header>
        <div class="p-3">
          <div class="overflow-x-auto">
            <table class="table-auto w-full">
              <thead
                class="text-xs font-semibold uppercase text-gray-400 bg-gray-50"
              >
                <tr>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Application ID</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Action</div>
                  </th>
                  
               
                
                </tr>
              </thead>
              <tbody class="text-sm divide-y divide-gray-100">
                <tr v-for="user in users" :key="user.id">
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="font-medium text-gray-800" >
                        {{user.id}}
                      </div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left"><router-link class=" btn text-green-600 dark:text-green-500 hover:underline" :to="{ path: `/admin-check/${user.id}` }">View</router-link></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import app from '../../../firebase/auth-individual/firebase'
import { getDocs, collection, getFirestore} from 'firebase/firestore'
export default {

    data(){
        return{
            users: [],
        }
    },

    methods:{
        async fetchUser(){
            const db = getFirestore(app);
            const userRef = collection(db, "qr-application");

            let userSnapshot = await getDocs(userRef);
            let users = [];
            userSnapshot.forEach((user)=>{
                let userData = user.data();
                userData.id = user.id

                console.log(userData.id)
                users.push(userData);
            });
            console.log(users);
            this.$data.users = users;

        }
    },

    created(){
        this.fetchUser();
    }
    
}
</script>




<style scoped>

    .table {
    border-spacing: 0 15px;
  }

  i {
    font-size: 1rem !important;
  }

  .table tr {
    border-radius: 20px;
  }

  tr td:nth-child(n + 6),
  tr th:nth-child(n + 6) {
    border-radius: 0 0.625rem 0.625rem 0;
  }

  tr td:nth-child(1),
  tr th:nth-child(1) {
    border-radius: 0.625rem 0 0 0.625rem;
  }

</style>