<template>
  <div class="flex flex-wrap items-center justify-center -mt-5">
    <div class="w-full md:w-3/5 bg-white p-6 mt-8">
    <div class="flex flex-wrap items-center justify-center -mt-5" v-if="showQr">
     <qrcode-vue :value="value" :size="size" level="H"/>
     <!-- <VueQRCodeComponent text=""/> -->
     </div>
      <div class="flex items-center border-b py-2"></div>
      <div class="mt-2 text-2xl">
        <p class="text-center">
          <span class="font-bold">{{ user.name }}</span>
        </p>  
      </div>
      <div class="flex items-center justify-center">
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
        <p>Individual</p>
      </header>
        </div>
      <div class="flex pb-4 mt-4 items-center border-b flex">
        <button
          class="py-2 rounded flex-1 bg-green-500 text-white"
          @click="toGenerator"
        >
          <i class="fas fa-plus-circle"></i> QR Application
        </button>
        <button
          class="ml-1 py-2 rounded flex-1 bg-gray-400 text-white"
          @click="editProfile"
        >
          <i class="fas fa-plus-circle"></i> Edit Profile
        </button>
        <button
          class="bg-gray-200 py-2 px-4 rounded ml-2"
          @click="logoutProfile"
        >
          <img
            class="w-5"
            src="https://cdn-icons-png.flaticon.com/512/159/159707.png"
            alt="logo"
          />
        </button>
      </div>

      <div class="flex mt-2 items-center">
        <div class="text-gray-400">
          <img
            class="w-5"
            src="https://cdn-icons-png.flaticon.com/512/684/684809.png"
            alt="logo"
          />
          <i class="fas fa-home"></i>
        </div>
        <div class="text-lg ml-3">
          <p>
            Lives in <span class="font-bold">{{ user.address }}</span>
          </p>
        </div>
      </div>

      <div class="flex mt-2 items-center">
        <div class="text-gray-400">
          <img
            class="w-4"
            src="https://cdn-icons-png.flaticon.com/512/159/159832.png"
            alt="logo"
          />
        </div>

        <div class="text-lg ml-3">
          <p>{{ user.phoneNumber }}</p>
        </div>
      </div>

      <div class="flex mt-2 items-center">
        <div class="text-gray-400">
          <img
            class="w-4"
            src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
            alt="logo"
          />
        </div>

        <div class="text-lg ml-3">
          <p>{{ user.gender }}</p>
        </div>
      </div>

      <div class="flex mt-2 items-center">
        <div class="text-gray-400">
          <img
            class="w-4"
            src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
            alt="logo"
          />
        </div>

        <div class="text-lg ml-3">
          <p>{{ user.age }}</p>
        </div>
      </div>

      <div class="flex mt-2 items-center">
        <div class="text-gray-400">
          <img
            class="w-4"
            src="https://cdn-icons-png.flaticon.com/512/3126/3126571.png"
            alt="logo"
          />
        </div>

        <div class="text-lg ml-3">
          <p><span class="text-green-700 text-sm">{{ user.qrStatus }}</span></p>
        </div>
      </div>

      <div class="flex mt-2 items-center">
        <div class="text-gray-400">
          <img
            class="w-4"
            src="https://cdn-icons-png.flaticon.com/512/2910/2910768.png"
            alt="logo"
          />
        </div>

        <div class="text-lg ml-3">
          <a href="google.com"><p><span class="text-blue-600 underline underline-offset-4"> Entry Record</span></p></a>
        </div>
      </div>
    </div>
  </div>
<section class="py-1 bg-blueGray-50">
<div class="xl:w-8/12  xl:mb-0 px-4 mx-auto">
  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-base text-blueGray-700">Establishment Visited</h3>
        </div>
        <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
          <button class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Hide</button>
        </div>
      </div>
    </div>

    <div class="block w-full overflow-x-auto">
      <table class="items-center bg-transparent w-full border-collapse ">
        <thead>
          <tr>
            <th class="px-6 bg-gray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Establishment name
                        </th>
          <th class="px-6 bg-gray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Date
                        </th>
           <th class="px-6 bg-gray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Time
                        </th>
          <th class="px-6 bg-gray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Temperature
                        </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="entry in myEntry" :key="entry.id">
            <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
              {{entry.visitedEstab}}
            </th>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
              {{entry.date}}
            </td>
            <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              {{entry.time}}
            </td>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>
              {{entry.temperature}}
            </td>
          </tr>
      
       
      
         
        </tbody>

      </table>
    </div>
  </div>
</div>
</section>

</template>

<script>
import { defineComponent } from "vue";
import QrcodeVue from 'qrcode.vue'
// import VueQRCodeComponent from 'vue-qrcode-component'

import { getFirestore, collection, doc, getDoc, getDocs } from "firebase/firestore";
import app from "../../../firebase/auth-individual/firebase";
import { getAuth, signOut } from "firebase/auth";



export default defineComponent({
  components: {
  QrcodeVue,
  // VueQRCodeComponent,
  },
  data() {
    return {
      myEntry:  [],
      value: "",
        size: 200,
      selectedUser: {},
      userID: "",
      phone: "",
      userRefer: null,
      user: {
        name: null,
        address: null,
        gender: null,
        age: null,
        phoneNumber: null,
        qrStatus: 'No Value',
        qrData: null,
      },
    };
  },

  methods: {
    async getUser() {
      console.log(this.userID);
      const db = getFirestore(app);
      const userRef = collection(db, "user");
      console.log(userRef);

      let usersRef = doc(userRef, this.userID);
      this.$data.userRefer = usersRef;

      console.log(this.$data.userRefer);

      let user = await getDoc(this.$data.userRefer);
      console.log(user);

      let userData = user.data();

      console.log(userData);

      this.$data.user.name =
        userData.userInfo.firstName + " " + userData.userInfo.lastName;
      this.$data.user.phoneNumber = "+63" + userData.userInfo.phoneNumber;
      this.$data.user.address =
        userData.userInfo.purok +
        ", " +
        userData.userInfo.baranggay +
        ", " +
        userData.userInfo.municipality;
      this.$data.user.age = userData.userInfo.age + " years old";
      this.$data.user.gender = userData.userInfo.gender;
      this.$data.phone = userData.userInfo.phoneNumber;
      this.$data.user.qrData = userData.userInfo.qrData;
      this.$data.user.qrStatus = userData.userInfo.qrStatus;
      this.$data.value = userData.userInfo.qrData;


      const entryRef = collection(db, "entry-record");
      let entrySnap = await getDocs(entryRef);

      let myEntries = [];
      entrySnap.forEach((entry) =>{
        let entryData = entry.data();
        entryData.id = entry.id;
        if(entryData.name == this.$data.user.name){
        myEntries.push(entryData);
        }
        else{
          console.log();
        }
      });
      this.$data.myEntry = myEntries;
      console.log(myEntries)
    },

    toGenerator(){
      const id = this.$data.userID;
    if(this.$data.user.qrStatus == "Pending Application"){
      alert("Already have an application");
    }
    else if(this.$data.user.qrStatus == "No Application"){
         this.$router.push(`/individual-generate-qr/${id}`);
    }
    else{
      alert("Already have a QR Code")
    }
    
    },

    editProfile() {
      const id = this.$data.userID;
      this.$router.push(`/individual-settings/${id}`);
    },
    logoutProfile() {
    console.log("logged out")
    const auth = getAuth(app);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        this.$router.push('/individual-login');
        console.log(auth.currentUser)
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  },
  },

  computed:{
      showQr(){
        if(this.$data.user.qrData == "" | this.$data.user.qrData == null){
          return false;
        }
        else{
          return true;
        }
      }
  },

  created() {
    let id = this.$route.params.phoneId;
    this.$data.userID = id;
    this.getUser();
  },
});
</script>