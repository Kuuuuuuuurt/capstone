<template>
  <div class="mt-5 w-full flex flex-col justify-center items-center">
    <div class="max-w-lg bg-white shadow-md rounded-lg overflow-hidden mx-auto">
      <div class="py-4 px-8 mt-3">
        <div class="bg-gray-100 rounded-lg">
          <div class="py-4 px-4">
            <div class="flex flex-col">
              <h4 class="text-2xl font-semibold mb-3">
                Confirm Customer Information
              </h4>
              <div class="flex flex-col text-sm text-gray-500">
                <label class="font-semibold text-sm text-gray-600 pb-1 block"
                  >Customer Name</label
                >
                <input
                  type="text"
                  class="
                    border
                    rounded-lg
                    px-3
                    py-2
                    mt-1
                    mb-5
                    text-m
                    w-full
                    text-green-600
                  "
                  required
                  v-model="customerData.name"
                  disabled
                />

                <label class="font-semibold text-sm text-gray-600 pb-1 block"
                  >Address</label
                >
                <input
                  type="text"
                  class="
                    border
                    rounded-lg
                    px-3
                    py-2
                    mt-1
                    mb-5
                    text-m
                    w-full
                    text-green-600
                  "
                  required
                  v-model="customerData.address"
                  disabled
                />

                <label class="font-semibold text-sm text-gray-600 pb-1 block"
                  >Phone Number</label
                >
                <input
                  type="text"
                  class="
                    border
                    rounded-lg
                    px-3
                    py-2
                    mt-1
                    mb-5
                    text-m
                    w-full
                    text-green-600
                  "
                  required
                  v-model="customerData.phoneNumber"
                  disabled
                />

                <label class="font-semibold text-sm text-gray-600 pb-1 block"
                  >Gender</label
                >
                <input
                  type="text"
                  class="
                    border
                    rounded-lg
                    px-3
                    py-2
                    mt-1
                    mb-5
                    text-m
                    w-full
                    text-green-600
                  "
                  required
                  v-model="customerData.gender"
                  disabled
                />

                <label class="font-semibold text-sm text-gray-600 pb-1 block"
                  >Age</label
                >
                <input
                  type="text"
                  class="
                    border
                    rounded-lg
                    px-3
                    py-2
                    mt-1
                    mb-5
                    text-m
                    w-full
                    text-green-600
                  "
                  required
                  v-model="customerData.age"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-100 rounded-lg">
          <div class="py-4 px-4">
            <div class="flex flex-col">
              <h4 class="text-lg font-semibold mb-3">Input Temperature</h4>
              <div class="flex flex-col text-sm text-gray-500">
                <input
                  type="text"
                  class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  required
                  v-model="customerData.temperature"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="py-4">
          <a
            class="
              block
              tracking-widest
              uppercase
              text-center
              shadow
              bg-indigo-600
              hover:bg-indigo-700
              focus:shadow-outline focus:outline-none
              text-white text-xs
              py-3
              px-10
              rounded
            "
            @click="submit"
            >Submit</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import app from "../../../firebase/auth-individual/firebase";
export default {
  data() {
    return {
      estabID: "",
      customerID: "",
      customerData: {
        name: "",
        address: "",
        age: "",
        gender: "",
        temperature: "",
        phoneNumber: "",
        visitedEstab: "",
        time: "",
        date: "",
      },
    };
  },

  methods: {
    async getCustomer() {
      const db = getFirestore(app);

      const docRef = doc(db, "data-record", this.$data.customerID);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        let customerData = docSnap.data();
        this.$data.customerData.name = customerData.info.name;
        this.$data.customerData.address = customerData.info.address;
        this.$data.customerData.age = customerData.info.age;
        this.$data.customerData.gender = customerData.info.gender;
        this.$data.customerData.phoneNumber =
          "+63" + customerData.info.phoneNumber;

        const estabRef = doc(db, "user", this.$data.estabID);
        const estabSnap = await getDoc(estabRef);
        let estabData = estabSnap.data();
        this.$data.customerData.visitedEstab =
          estabData.userInfo.establishmentName;
      } else {
        alert("No such document!");
        this.$router.push(`/estab-scanner/${this.$data.estabID}`);
      }
    },

    async submit() {
      const current = new Date();
      const date = `${current.getDate()}/${
        current.getMonth() + 1
      }/${current.getFullYear()}`;
      const time = `${current.getHours()}:${current.getMinutes()}`.toString();
      this.$data.customerData.time = time;
      this.$data.customerData.date = date;


    

       var randomstring = require("randomstring");

      const id =  randomstring.generate({
        length: 30,
        charset: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      });
      const db = getFirestore(app);
      const addRecord = await setDoc(doc(db, "entry-record", id), this.$data.customerData);
      console.log(addRecord);

      alert("user " + this.$data.customerData.name + " is inserted");
      this.$router.push(`/estab-scanner/${this.$data.estabID}`)
    },
  },

  created() {
    let id = this.$route.params.estabId;
    this.$data.estabID = id;
    let id1 = this.$route.params.resultId;
    this.$data.customerID = id1;
    this.getCustomer();
  },
};
</script>