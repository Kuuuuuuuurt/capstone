<template>
  <div
    class="
      flex flex-col
      items-center
      justify-center
      w-screen
      h-screen
      text-gray-700
    "
  >
    <div class="leading-loose">
      <div
        class="max-w-xl m-4 p-10 bg-white rounded shadow-xl"
        
      >
        <p class="text-gray-800 font-medium">Application information</p>
        <div class="">
          <label class="block text-sm text-gray-00" for="cus_name"
            >First Name</label
          >
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            id="cus_name"
            name="cus_name"
            type="text"
            required=""
            placeholder="Your Name"
            aria-label="Name"
            disabled
            v-model="user.userInfo.firstName"
          />
        </div>
        <div class="">
          <label class="block text-sm text-gray-00" for="cus_name"
            >Last Name</label
          >
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            id="cus_name"
            name="cus_name"
            type="text"
            required=""
            placeholder="Your Name"
            aria-label="Name"
            disabled
            v-model="user.userInfo.lastName"
          />
        </div>
        <div class="mt-2">
          <label class="block text-sm text-gray-600" for="cus_email"
            >Contact Number</label
          >
          <input
            class="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="Number"
            aria-label="Email"
            disabled
            v-model="user.userInfo.phoneNumber"
          />
        </div>
        <div class="mt-2">
          <label class="block text-sm text-gray-600" for="cus_email"
            >Address</label
          >
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="Municipality"
            aria-label="Email"
            disabled
            v-model="user.userInfo.municipality"
          />
        </div>
        <div class="mt-2">
          <label class="hidden text-sm block text-gray-600" for="cus_email"
            >Baranggay</label
          >
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="Baranggay"
            aria-label="Email"
            disabled
            v-model="user.userInfo.baranggay"
          />
        </div>
        <div class="inline-block mt-2 w-1/2 pr-1">
          <label class="hidden block text-sm text-gray-600" for="cus_email"
            >Purok</label
          >
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="Purok"
            aria-label="Email"
            disabled
            v-model="user.userInfo.purok"
          />
        </div>
        <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
          <label class="hidden block text-sm text-gray-600" for="cus_email"
            >Gender</label
          >
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="Gender"
            aria-label="Email"
            disabled
            v-model="user.userInfo.gender"
          />
        </div>
        <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
          <label class="hidden block text-sm text-gray-600" for="cus_email"
            >Age</label
          >
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="Age"
            aria-label="Email"
            disabled
            v-model="user.userInfo.age"
          />
        </div>
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
        <div class="mt-4">
          <button
            class="
              px-4
              py-1
              text-white
              font-light
              tracking-wider
              bg-gray-900
              rounded
            "
            type="submit"
            @click="acceptData"
          >
            Accept
          </button>
          <button
            class="
              ml-3
              px-4
              py-1
              text-white
              font-light
              tracking-wider
              bg-gray-900
              rounded
            "
            type="submit"
            @click="decline"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import app from "../../../firebase/auth-individual/firebase";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";




export default {
  data() {
    return {
      applicationID: "",
      userRefer: "",
      usersRefer: "",
      user: {
        userInfo: {
          phoneNumber: "",
          firstName: "",
          lastName: "",
          age: "",
          gender: "",
          municipality: "",
          baranggay: "",
          purok: "",
          qrData: "",
          qrStatus: "",
          type: "individual",
        }, 
      },
      qrInformation:{
        info:{
        name: '',
        address: '',
        age: '',
        gender: '',
        phoneNumber: '',
        }
      }
    };
  },

  methods: {
    async getApplication() {
      const db = getFirestore(app);
      const userRef = collection(db, "qr-application");

      let usersRef = doc(userRef, this.applicationID);
      this.$data.userRefer = usersRef;

      let user = await getDoc(this.$data.userRefer);

      let applicationData = user.data();

      console.log(applicationData);

      this.$data.user.userInfo.phoneNumber =
        applicationData.userInfo.phoneNumber;
      console.log(this.$data.user.userInfo.phoneNumber);
      this.$data.user.userInfo.firstName = applicationData.userInfo.firstName;
      this.$data.user.userInfo.lastName = applicationData.userInfo.lastName;
      this.$data.user.userInfo.gender = applicationData.userInfo.gender;
      this.$data.user.userInfo.age = applicationData.userInfo.age;
      this.$data.user.userInfo.baranggay = applicationData.userInfo.baranggay;
      this.$data.user.userInfo.purok = applicationData.userInfo.purok;
      this.$data.user.userInfo.municipality =
        applicationData.userInfo.municipality;

      this.$data.qrInformation.info.name = applicationData.userInfo.firstName + " " + applicationData.userInfo.lastName;
      this.$data.qrInformation.info.address = applicationData.userInfo.purok + ", " + applicationData.userInfo.baranggay + ", " + applicationData.userInfo.municipality;
      this.$data.qrInformation.info.age = applicationData.userInfo.age;
      this.$data.qrInformation.info.gender = applicationData.userInfo.gender;
      this.$data.qrInformation.info.phoneNumber = applicationData.userInfo.phoneNumber;

      var randomstring = require("randomstring");

      let qrDetail =
        randomstring.generate({
          length: 5,
          charset: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        }) +
        "-" +
        randomstring.generate({
          length: 6,
          charset: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        }) +
        "-" +
        randomstring.generate({
          length: 5,
          charset: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        });
      this.$data.user.userInfo.qrData = qrDetail;
      console.log(qrDetail);
    },

    async acceptData() {
      const db = getFirestore(app);
      const userRef = collection(db, "user");
      const usersRefs = collection(db, "qr-application");

      let usersRef = doc(userRef, this.$data.user.userInfo.phoneNumber);
      this.$data.usersRefer = usersRef;
      console.log(this.usersRefer);
      this.$data.user.userInfo.qrStatus = "Approved";
      //update qrData
      await setDoc(this.$data.usersRefer, this.$data.user);

      //delete User
      let delApplication = doc(usersRefs, this.$data.applicationID);
      await deleteDoc(delApplication);

      //create Qr-code details
      let id = this.$data.user.userInfo.qrData;
      const addDocs = setDoc(doc(db, "data-record", id), this.$data.qrInformation);
      console.log(addDocs);

      alert("success");
      this.$router.push('/admin-home');
    },

    async decline(){
       const db = getFirestore(app);
      const userRef = collection(db, "user");
      const usersRefs = collection(db, "qr-application");

      let usersRef = doc(userRef, this.$data.user.userInfo.phoneNumber);
      this.$data.usersRefer = usersRef;
      console.log(this.usersRefer);
      this.$data.user.userInfo.qrStatus = "Declined";
      //update qrData
      await setDoc(this.$data.usersRefer, this.$data.user);

      //delete User
      let delApplication = doc(usersRefs, this.$data.applicationID);
      await deleteDoc(delApplication);

      this.$router.push('/admin-home')
    }
  },

  created() {
    let id = this.$route.params.applicationID;
    this.$data.applicationID = id;
    this.getApplication();
  },
};
</script>