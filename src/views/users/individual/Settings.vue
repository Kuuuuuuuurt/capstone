<template>
  <div class="py-40 bg-gray-100 bg-opacity-50">
    <div class="mx-auto container max-w-2xl md:w-3/4 shadow-md">
      <div
        class="
          bg-gray-100
          p-4
          border-t-2
          bg-opacity-5
          border-indigo-400
          rounded-t
        "
      >
        <div class="max-w-sm mx-auto md:w-full md:mx-0">
          <div class="inline-flex items-center space-x-4">
            <qrcode-vue :value="value" :size="size" level="H" v-if="showQr"/>
          

            <h1 class="text-gray-600">
              {{ user.userInfo.lastName + ", " + user.userInfo.firstName }}
            </h1>
          </div>
        </div>
      </div>
      <div class="bg-white space-y-6">
        <div
          class="
            md:inline-flex
            space-y-4
            md:space-y-0
            w-full
            p-4
            text-gray-500
            items-center
          "
        >
          <h2 class="md:w-1/3 max-w-sm mx-auto">Account</h2>
          <div class="md:w-2/3 max-w-sm mx-auto">
            <label class="text-sm text-gray-400">Phone Number</label>
            <div class="w-full inline-flex border">
              <div class="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                <img
                  class="w-4 ml-2 mt-1"
                  src="https://cdn-icons-png.flaticon.com/512/159/159832.png"
                  alt="logo"
                />
              </div>
              <input
                type=""
                class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                disabled
                v-model="user.userInfo.phoneNumber"
              />
            </div>
          </div>
        </div>

        <hr />
        <div
          class="
            md:inline-flex
            space-y-4
            md:space-y-0
            w-full
            p-4
            text-gray-500
            items-center
          "
        >
          <h2 class="md:w-1/3 mx-auto max-w-sm">Personal info</h2>
          <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
            <div>
              <label class="text-sm text-gray-400">First Name</label>
              <div class="w-full inline-flex border">
                <div class="w-1/12 pt-2 bg-gray-100">
                  <img
                    class="w-4 ml-2 mt-1"
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
                    alt="logo"
                  />
                </div>
                <input
                  type="text"
                  class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                  v-model="user.userInfo.firstName"
                />
              </div>
            </div>

            <div>
              <label class="text-sm text-gray-400">Last Name</label>
              <div class="w-full inline-flex border">
                <div class="w-1/12 pt-2 bg-gray-100">
                     <img
                    class="w-4 ml-2 mt-1"
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
                    alt="logo"
                  />
                </div>
                <input
                  type="text"
                  class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                  v-model="user.userInfo.lastName"
                />
              </div>
            </div>

            <div>
              <label class="text-sm text-gray-400">Gender</label>
              <div class="w-full inline-flex border">
                <div class="w-1/12 pt-2 bg-gray-100">
                   <img
                    class="w-4 ml-2 mt-1"
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
                    alt="logo"
                  />
                </div>
                <input
                  type="text"
                  class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                  v-model="user.userInfo.gender"
                />
              </div>
            </div>

            <div>
              <label class="text-sm text-gray-400">Age</label>
              <div class="w-full inline-flex border">
                <div class="w-1/12 pt-2 bg-gray-100">
                      <img
                    class="w-4 ml-2 mt-1"
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
                    alt="logo"
                  />
                </div>
                <input
                  type="text"
                  class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                  v-model="user.userInfo.age"
                />
              </div>
            </div>

                <div>
              <label class="text-sm text-gray-400">Purok</label>
              <div class="w-full inline-flex border">
                <div class="w-1/12 pt-2 bg-gray-100">
                      <img
                    class="w-4 ml-2 mt-1"
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
                    alt="logo"
                  />
                </div>
                <input
                  type="text"
                  class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                  v-model="user.userInfo.purok"
                />
              </div>
            </div>

                  <div>
              <label class="text-sm text-gray-400">baranggay</label>
              <div class="w-full inline-flex border">
                <div class="w-1/12 pt-2 bg-gray-100">
                      <img
                    class="w-4 ml-2 mt-1"
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
                    alt="logo"
                  />
                </div>
                <input
                  type="text"
                  class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                  v-model="user.userInfo.baranggay"
                />
              </div>
            </div>

                  <div>
              <label class="text-sm text-gray-400">municipality</label>
              <div class="w-full inline-flex border">
                <div class="w-1/12 pt-2 bg-gray-100">
                      <img
                    class="w-4 ml-2 mt-1"
                    src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
                    alt="logo"
                  />
                </div>
                <input
                  type="text"
                  class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                  v-model="user.userInfo.municipality"
                />
              </div>
            </div>


                  <div>
              <div class="w-full inline-flex">
                <button
              class="
                text-white
                w-fit
                mx-auto
                max-w-sm
                rounded-md
                text-center
                bg-indigo-400
                py-2
                px-4
                inline-flex
                items-center
                focus:outline-none
                md:float-right
              "
              @click="updateProfile"
            >
              <svg
                fill="none"
                class="w-4 text-white mr-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Update
            </button>
              </div>
            </div>

          </div>
        </div>

        <hr />
        <div
          class="
            md:inline-flex
            w-full
            space-y-4
            md:space-y-0
            p-8
            text-gray-500
            items-center
          "
        >
          <h2 class="md:w-4/12 max-w-sm mx-auto">Change password</h2>

          <div
            class="
              md:w-5/12
              w-full
              md:pl-9
              max-w-sm
              mx-auto
              space-y-5
              md:inline-flex
              pl-2
            "
          >
            <div class="w-full inline-flex border-b">
              <div class="w-1/12 pt-2">
                <svg
                  fill="none"
                  class="w-6 text-gray-400 mx-auto"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <input
                type="password"
                class="w-11/12 focus:outline-none focus:text-gray-600 p-2 ml-4"
                placeholder="New"
              />
            </div>
          </div>

          <div class="md:w-3/12 text-center md:pl-6">
            <button
              class="
                text-white
                w-full
                mx-auto
                max-w-sm
                rounded-md
                text-center
                bg-indigo-400
                py-2
                px-4
                inline-flex
                items-center
                focus:outline-none
                md:float-right
              "
            >
              <svg
                fill="none"
                class="w-4 text-white mr-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Update
            </button>
          </div>
        </div>

        <hr />
        <div class="w-full p-4 text-right text-gray-500">
          <button class="inline-flex items-center focus:outline-none mr-4" @click="back">
            Save and Back
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import app from "../../../firebase/auth-individual/firebase";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import QrcodeVue from 'qrcode.vue'

export default defineComponent({
  components: {
    QrcodeVue
  },

  data() {
    return {
      userID: null,
      userRefer: null,
       value: "",
        size: 50,
      user: {
        userInfo: {
          phoneNumber: "",
          firstName: "",
          lastName: "",
          gender: "",
          age: "",
          municipality: "",
          baranggay: "",
          purok: "",
          qrData: null,
          qrStatus: null,
          type: "individual",
        },
      },
    };
  },
  methods: {
    async getUser() {
      const db = getFirestore(app);
      const userRef = collection(db, "user");
      console.log(userRef);

      let usersRef = doc(userRef, this.$data.userID);
      this.$data.userRefer = usersRef;

      let user = await getDoc(this.$data.userRefer);

      let userData = user.data();

      console.log(userData);

      this.$data.user.userInfo.phoneNumber = userData.userInfo.phoneNumber;
      this.$data.user.userInfo.municipality = userData.userInfo.municipality;
      this.$data.user.userInfo.gender = userData.userInfo.gender;
      this.$data.user.userInfo.age = userData.userInfo.age;
      this.$data.user.userInfo.baranggay = userData.userInfo.baranggay;
      this.$data.user.userInfo.purok = userData.userInfo.purok;
      this.$data.user.userInfo.firstName = userData.userInfo.firstName;
      this.$data.user.userInfo.lastName = userData.userInfo.lastName;
      this.$data.user.userInfo.qrData = userData.userInfo.qrData;
      this.$data.user.userInfo.qrStatus = userData.userInfo.qrStatus;

      this.$data.value = userData.userInfo.qrData;
    },

    async updateProfile() {
      await setDoc(this.$data.userRefer, this.$data.user);
      this.$router.push(`/individual-home/${this.$data.userID}`);
    },

    back(){
      this.$router.push(`/individual-home/${this.$data.userID}`);
    }
  },

  created() {
    let id = this.$route.params.phoneId;
    this.$data.userID = id;
    this.getUser();
  },

  computed:{
    showQr(){
        if(this.$data.value == "" | this.$data.value == null){
          return false;
        }
        else{
          return true;
        }
      }
  }
});
</script>