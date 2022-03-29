<template>
  <div>
    <div class="bg-gray-100 min-h-screen font-mono">
      <div class="container mx-auto">
        <div class="inputs w-full max-w-2xl p-6 mx-auto">
          <div class="mt-2">
            <label class="text-2xl text-gray-900">Create an account</label>
          </div>
          <div>
            <label class="text-lg text-gray-900"
              >Please provide what is needed.</label
            >
          </div>
          <form
            class="mt-6 border-t border-gray-400 pt-4 px-5 py-7"
            @submit.prevent="register"
          >
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-full px-3 mb-6">
                <label
                  class=" uppercase font-semibold text-sm text-gray-600 pb-1 block"
                  for="grid-text-1"
                  >Phone Number</label
                >
                <input
                  class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                  id="grid-text-1"
                  type="text"
                  placeholder="Enter Number"
                  required
                  v-model="user.userInfo.phoneNumber"
                />

                <div class="">
                  <label class="text-2xl text-gray-900">
                    Personal information:
                  </label>
                </div>
                <div class="personal w-full border-t border-gray-400 pt-4 mt-2">
                  <div class="flex items-center justify-between mt-4">
                    <div class="w-full md:w-1/2 px-3 mb-2">
                      <label
                        class="font-semibold text-sm text-gray-600 pb-1 block uppercase"
                        >first name</label
                      >
                      <input
                        class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                        type="text"
                        required
                        v-model="user.userInfo.firstName"
                      />
                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-2">
                      <label
                        class="font-semibold text-sm text-gray-600 pb-1 block uppercase"
                        >last name</label
                      >
                      <input
                        class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                        type="text"
                        required
                        v-model="user.userInfo.lastName"
                      />
                    </div>
                  </div>

                  <div class="flex items-center justify-between">
                    <div class="w-full md:w-1/2 px-3">
                      <label
                       class="font-semibold text-sm text-gray-600 pb-1 block uppercase"
                        >age</label
                      >
                      <input
                       class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                        type="text"
                        required
                        v-model="user.userInfo.age"
                      />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                      <label
                        class="font-semibold text-sm text-gray-600 pb-1 block uppercase"
                        >Gender</label
                      >
                      <div class="flex-shrink w-full inline-block relative">
                        <select
                         class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                          v-model="user.userInfo.gender"
                        >
                          <option>Male</option>
                          <option>Female</option>
                          <option>Others</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="w-full md:w-full px-3">
                    <label
                      class="font-semibold text-sm text-gray-600 pb-1 block uppercase"
                      >pick your Municipality</label
                    >
                    <div class="flex-shrink w-full inline-block relative">
                      <select
                        class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                        v-model="user.userInfo.municipality"
                      >
                        <option>Ozamiz City</option>
                        <option>Clarin</option>
                        <option>Tudela</option>
                      </select>
                    </div>
                  </div>

                  <div class="flex items-center justify-between">
                    <div class="w-full md:w-1/2 px-3">
                      <label
                        class="font-semibold text-sm text-gray-600 pb-1 block uppercase"
                        >baranggay</label
                      >
                      <input
                        class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                        type="text"
                        required
                        v-model="user.userInfo.baranggay"
                      />
                    </div>
                    <div class="w-full md:w-1/2 px-3">
                      <label
                        class="font-semibold text-sm text-gray-600 pb-1 block uppercase"
                        >purok</label
                      >
                      <input
                       class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                        type="text"
                        required
                        v-model="user.userInfo.purok"
                      />
                    </div>
                  </div>

                  <div class="flex items-center justify-between">
                    <div class="w-full md:w-1/2 px-3">
                      <label
                        class="font-semibold text-sm text-gray-600 pb-1 block uppercase"
                        >Password</label
                      >
                      <input
                        class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                        type="password"
                        required
                        v-model="password"
                      />
                    </div>
                  </div>

                  <div class="w-full md:w-1/2 px-3 mb-6">
                    <button
                      type="submit"
                      class="
                        transition
                        duration-200
                        bg-blue-500
                        hover:bg-blue-600
                        focus:bg-blue-700
                        focus:shadow-sm
                        focus:ring-4
                        focus:ring-blue-500
                        focus:ring-opacity-50
                        text-white
                        w-96
                        py-2.5
                        rounded-lg
                        text-sm
                        shadow-sm
                        hover:shadow-md
                        font-semibold
                        text-center
                        inline-block
                      "
                    >
                      <span class="inline-block mr-2">Register</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        class="w-4 h-4 inline-block"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </div>

                    <div class="mt-2">
                      <label
                        class="
                          block
                          capitalize
                          tracking-wide
                          text-gray-700 text-xs
                          font-bold
                          mb-2
                        "
                        >by clicking create account, you agree to our
                        <a href="/privacy-policy" class="text-blue-700"
                          >Privay Policy.</a
                        ></label
                      >
                    </div>

                  <div class="py-5">
                    <div class="grid grid-cols-2 gap-1">
                      <div class="text-center sm:text-left whitespace-nowrap">
                        <a
                          class="
                            transition
                            duration-200
                            mx-5
                            px-5
                            py-4
                            cursor-pointer
                            font-normal
                            text-sm
                            rounded-lg
                            text-gray-500
                            hover:bg-gray-200
                            focus:outline-none
                            focus:bg-gray-300
                            focus:ring-2
                            focus:ring-gray-400
                            focus:ring-opacity-50
                            ring-inset
                          "
                          href="/individual-login"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            class="w-4 h-4 inline-block align-text-top"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                          </svg>
                          <span class="inline-block ml-1">Back to login</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import app from "../../../firebase/auth-individual/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
export default {
  data() {
    return {
      password: "",
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
          qrStatus: "No Application",
          qrData: null,
          type: "individual",
        },
      },
    };
  },

  methods: {
    register() {
      console.log("Creating Account");

      const emailPhone =
        "+63" + this.$data.user.userInfo.phoneNumber + "@gmail.com";
      const password = this.$data.password;
      const auth = getAuth(app);
      const db = getFirestore(app);

      createUserWithEmailAndPassword(auth, emailPhone, password)
        .then((userCredential) => {
          //authentication
          const user = userCredential.user;
          console.log(user);

          //firestoredb
          let id = this.$data.user.userInfo.phoneNumber;
          const addDocs = setDoc(doc(db, "user", id), this.$data.user);
          console.log(addDocs);
          console.log("Success");
          this.$router.push(`/individual-home/${id}`);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log(errorCode);
          alert(errorMessage);
          // ..
        });
    },
  },
};
</script>