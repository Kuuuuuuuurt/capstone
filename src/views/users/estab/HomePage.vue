<template>
  <div class="w-5/6 flex items-center justify-center">
    <div class="flex items-center justify-left">
      <!-- Card -->
      <div class="bg-white p-8 w-[32rem]">
        <!-- Header -->
        <header class="flex font-light text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 rotate-90 -ml-2"
            viewBox="0 0 24 24"
            stroke="#b91c1c"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
          <p>Establishment</p>
        </header>

        <!-- Title -->
        <h2 class="font-bold text-3xl mt-2">
          {{ user.estabName }}
        </h2>
        <div>
           <a>
            <button
              class="
                bg-red-600
                hover:bg-red-800
                text-white
                py-1
                px-3
                sm
                rounded-full
                
              "
              @click="toSettings"
            >
              Settings
            </button>
          </a>

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
              "
              @click="signOut"
            >
              Logout
            </button>
          </a>
        </div>

        <!-- Tags -->
        <p class="mt-2">
          Owner:
          <a href="#" class="text-red-600"> {{ user.ownerName }} </a>,
        </p>
        <p class="-mt-2">
          Contact Number:
          <a href="#" class="text-red-600"> {{ user.contactNumber }} </a>,
        </p>

        <!-- Description -->
        <h3 class="font-bold text-xl mt-4">Address</h3>
        <p class="font-light text-red-600">
          {{ user.address }}
        </p>

        <!-- Button -->
        <button
          class="
            bg-red-600
            text-white
            font-semibold
            py-2
            px-5
            text-sm
            mt-3
            inline-flex
            items-center
            group
            rounded
          "
          @click="toScanner"
        >
          <p>Scan QR-Code</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="
              h-4
              w-4
              ml-1
              group-hover:translate-x-2
              delay-100
              duration-200
              ease-in-out
            "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <section class="antialiased text-gray-600 px-4">
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
          my-8
        "
      >
        <header class="px-5 py-4 border-b border-gray-100">
          <h2 class="font-semibold text-gray-800">Entry Record</h2>
        </header>
        <div class="p-3">
          <div class="overflow-x-auto">
            <table class="table-auto w-full">
              <thead
                class="text-xs font-semibold uppercase text-gray-400 bg-gray-50"
              >
                <tr>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Name</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Phone</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Address</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-center">Gender</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-center">Temperature</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-center">Time</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-center">Date</div>
                  </th>
                </tr>
              </thead>
              <tbody class="text-sm divide-y divide-gray-100">
                <tr v-for="customer in customers" :key="customer.id">
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="font-medium text-gray-800">
                        {{ customer.name }}
                      </div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">{{ customer.phoneNumber }}</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-green-500">
                      {{ customer.address }}
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-medium text-center">
                      {{ customer.gender }}
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-medium text-center">
                      {{ customer.temperature }}
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-medium text-center">
                      {{ customer.time }}
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-medium text-center">
                      {{ customer.date }}
                    </div>
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
import app from "../../../firebase/auth-individual/firebase";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import {getAuth, signOut} from 'firebase/auth'
export default {
  data() {
    return {
      customers: [],
      estabID: "",
      reference: "",
      user: {
        estabName: "",
        ownerName: "",
        address: "",
        contactNumber: "",
      },
    };
  },

  methods: {
    async getUser() {
      const db = getFirestore(app);
      const userRef = collection(db, "user");

      let usersRef = doc(userRef, this.estabID);
      this.$data.reference = usersRef;

      let user = await getDoc(this.$data.reference);

      let userData = user.data();

      this.$data.user.estabName = userData.userInfo.establishmentName;
      this.$data.user.address =
        userData.userInfo.purok +
        ", " +
        userData.userInfo.baranggay +
        ", " +
        userData.userInfo.municipality +
        ", " +
        "Misamis Occidental";
      this.$data.user.contactNumber = userData.userInfo.phoneNumber;
      this.$data.user.ownerName = userData.userInfo.owner;

      //display all data in table
      const customerRef = collection(db, "entry-record");
      let customerSnap = await getDocs(customerRef);

      let customers = [];
      customerSnap.forEach((customer) => {
        let customerData = customer.data();
        customerData.id = customer.id;
        if(customerData.visitedEstab == this.$data.user.estabName){
          customers.push(customerData);
        }
        else{
        console.log("")
        }
      });
      this.$data.customers = customers;
    },

    toScanner() {
      let id = this.$data.estabID;
      this.$router.push(`/estab-scanner/${id}`);
    },

    signOut(){
      const auth = getAuth(app)
         signOut(auth)
      .then(() => {
        // Sign-out successful.
        this.$router.push('/estab-login');
        console.log(auth.currentUser)
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
    },

    toSettings(){
      const id = this.$data.estabID;
      this.$router.push( `/estab-settings/${id}`);
    }
  },

  created() {
    let id = this.$route.params.estabId;
    this.$data.estabID = id;
    this.getUser();
  },
};
</script>
