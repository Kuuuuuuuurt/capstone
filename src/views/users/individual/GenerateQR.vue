<template>
  <div class="flex flex-wrap items-center justify-center -mt-5">
    <div class="w-full md:w-3/5 bg-white p-6">
      <div class="mt-5 text-2xl">
        <p class="text-center">
          <span class="">Setup QR Information</span>
        </p>
      </div>
      <div class="flex items-center border-b py-4"></div>
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
              <h2 class="font-semibold text-gray-800">Personal Information:</h2>
            </header>
            <div class="p-3">
              <div class="overflow-x-auto inline-block">
                <div class="flex mt-2 items-center">
                  <div class="text-gray-400">
                    <img
                      class="w-5"
                      src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
                      alt="logo"
                    />
                    <i class="fas fa-home"></i>
                  </div>

                  <div class="text-lg ml-3">
                    <p>
                      <span class="font-bold">{{ this.$data.name }}</span>
                    </p>
                  </div>
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
                      Lives in
                      <span class="font-bold">{{ this.$data.address }}</span>
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
                    <p>{{ this.$data.contactNumber }}</p>
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
                    <p>{{ this.$data.gender }}</p>
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
                    <p>{{ this.$data.age }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- vaxx card -->
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
            <h2 class="font-semibold text-gray-800">Vaccination Card</h2>
          </header>
          <div class="p-3">
            <div class="overflow-x-auto inline-block"></div>
          </div>
        </div>
        <div class="flex pb-4 mt-4 items-center border-b flex w-48">
          <button
            class="py-2 rounded flex-1 bg-green-500 text-white"
            @click="submitData"
          >
            <i class="fas fa-plus-circle"></i> Submit
          </button>
          <button
            class="ml-1 py-2 rounded flex-1 bg-gray-400 text-white"
            @click="cancel"
          >
            <i class="fas fa-plus-circle"></i> Back
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import app from "../../../firebase/auth-individual/firebase";
import { getFirestore, collection, doc, getDoc, setDoc } from "firebase/firestore";
// import db from '../../../firebase/db/firebase'
export default {
  data() {
    return {
      userID: null,
      userRefer: null,
      name: "",
      gender: "",
      age: "",
      address: "",
      contactNumber: "",
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
          qrStatus: "Pending Application",
          qrData: null,
          type: "individual"
        },
      },
    };
  },
  methods: {
    async getUser() {
      console.log("generator");
      console.log(this.userID);

      const db = getFirestore(app);
      const userRef = collection(db, "user");

      let usersRef = doc(userRef, this.userID);
      this.$data.userRefer = usersRef;

      let user = await getDoc(this.$data.userRefer);

      let userData = user.data();

      console.log(userData);

      this.$data.name =
        userData.userInfo.firstName + " " + userData.userInfo.lastName;
      this.$data.address =
        userData.userInfo.purok +
        ", " +
        userData.userInfo.baranggay +
        ", " +
        userData.userInfo.municipality;
      this.$data.age = userData.userInfo.age + " Years Old";
      this.$data.gender = userData.userInfo.gender;
      this.$data.contactNumber = "+63" + userData.userInfo.phoneNumber;

      // data setting for collection
      this.$data.user.userInfo.phoneNumber = userData.userInfo.phoneNumber;
      this.$data.user.userInfo.firstName = userData.userInfo.firstName;
      this.$data.user.userInfo.lastName = userData.userInfo.lastName;
      this.$data.user.userInfo.age = userData.userInfo.age;
      this.$data.user.userInfo.gender = userData.userInfo.gender;
      this.$data.user.userInfo.baranggay = userData.userInfo.baranggay;
      this.$data.user.userInfo.municipality = userData.userInfo.municipality;
      this.$data.user.userInfo.purok = userData.userInfo.purok;
    },

    cancel() {
      this.$router.push(`/individual-home/${this.$data.userID}`);
    },

     submitData() {
       var randomstring = require("randomstring");
       let id = randomstring.generate({
        length: 30,
        charset: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      });
       console.log(id);

       const db = getFirestore(app);
      const addDocs = setDoc(doc(db, "qr-application", id), this.$data.user)


      const addDocu = setDoc(doc(db, "user", this.$data.userID), this.$data.user);
      console.log(addDocu);

      
      console.log(addDocs)
      alert("Application for Qr-Code Submitted, Please wait for the response!");
      this.$router.push(`/individual-home/${this.$data.userID}`);
    },
  },

  created() {
    let id = this.$route.params.phoneId;
    this.$data.userID = id;
    this.getUser();
  },
};
</script>