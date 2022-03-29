<template>
  <div>
    <aside
      class="flex flex-col lg:items-center bg-white text-gray-700 shadow h-full"
    >
      <!-- Side Nav Bar-->

      <ul class="flex justify-evenly w-full">
        <!-- Items Section -->

        <li class="hover:bg-gray-100">
          <a
            href="/individual-home"
            class="
              h-14
              w-16
              px-4
              flex flex
              justify-center
              items-center
              focus:text-orange-500
            "
          >
            <img
              class="mx-auto"
              src="../../assets/icons/home.png"
              alt="Home"
            />
          </a>
        </li>

        <li class="hover:bg-gray-100">
          <a
            href="/individual-qrcode-page"
            class="
                h-14
              w-16
              px-4
              flex flex
              justify-center
              items-center
              focus:text-orange-500
            "
          >
            <img
              class="mx-auto"
              src="../../assets/icons/qr-code.png"
              alt="qr code"
            />
          </a>
        </li>

        <li class="hover:bg-gray-100">
          <a
            href="/individual-health-declaration-form"
            class="
                h-14
              w-16
              px-4
              flex flex
              justify-center
              items-center
              focus:text-orange-500
            "
          >
            <img
              class="mx-auto"
              src="../../assets/icons/question.png"
              alt="health"
            />
          </a>
        </li>

        <li class="hover:bg-gray-100">
          <a
            href="/individual-settings"
            class="
                h-14
              w-16
              px-4
              flex flex
              justify-center
              items-center
              focus:text-orange-500
            "
          >
            <img
              class="mx-auto"
              src="../../assets/icons/settings.png"
              alt="setings"
            />
          </a>
        </li>
       <li class="hover:bg-gray-100">
          <a
            href="/individual-login"
            class="
                h-14
              w-16
              px-4
              flex flex
              justify-center
              items-center
              focus:text-orange-500
            "
          >
            <img
              class="mx-auto"
              src="../../assets/icons/logout.png"
              alt="logout"
            />
          </a>
        </li>
      </ul>
    </aside>
  </div>
</template>


<script>
import { defineComponent } from "vue";
export default defineComponent({
  components: {
  },

});
</script>