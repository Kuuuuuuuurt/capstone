<template>
  <div>
   <div class=" min-h-screen font-mono bg-slate-500 ">
      <div class="container mx-auto">
        <div class="w-full max-w-2xl p-6 mx-auto">
          <div class="mt-5">
            <label class="text-2xl text-gray-900">Scan QR-Code</label>
          </div>
          <div class=" w-full h-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl">
            <div class='max-w-md mx-auto space-y-6'>
              <qrcode-stream
              @decode="onDecode"
              :track="drawOutline"
              @init="onInit"
              class="h-100vh"
            ></qrcode-stream>
          </div>
          <p class="error">{{ error }}</p>
          </div>
          <div class="p-2">
    <div class="inline-flex items-center bg-white leading-none text-purple-600 rounded-full p-2 shadow text-teal text-sm">
      <span class="inline-flex bg-indigo-600 text-white rounded-full h-6 px-3 justify-center items-center">Result</span>
      <span class="inline-flex px-2">{{ result.url }} </span>
    </div>
  </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { QrcodeStream } from "vue3-qrcode-reader";

export default {
  components: {
    QrcodeStream,
  },

  data() {
    return {
      estabID: '',
      result: {
        url: "",
      },
      error: "",
    };
  },

  methods: {
    onDecode(result) {
      const id = this.$data.estabID;
      this.result.url = result;
      this.$router.push(`/estab-insert-scanned-data/${id}/${result}`)
      console.log("result", result);
    },
    async onInit(promise) {
      try {
        await promise;
      } catch (error) {
        if (error.name === "NotAllowedError") {
          this.error = "ERROR: you need to grant camera access permission";
        } else if (error.name === "NotFoundError") {
          this.error = "ERROR: no camera on this device";
        } else if (error.name === "NotSupportedError") {
          this.error = "ERROR: secure context required (HTTPS, localhost)";
        } else if (error.name === "NotReadableError") {
          this.error = "ERROR: is the camera already in use?";
        } else if (error.name === "OverconstrainedError") {
          this.error = "ERROR: installed cameras are not suitable";
        } else if (error.name === "StreamApiNotSupportedError") {
          this.error = "ERROR: Stream API is not supported in this browser";
        } else if (error.name === "InsecureContextError") {
          this.error =
            "ERROR: Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.";
        } else {
          this.error = `ERROR: Camera error (${error.name})`;
        }
      }
    },
    drawOutline(decodeData, context) {
      var points = [];
      console.log(decodeData);
      for (var k in decodeData) {
        switch (k) {
          case "topLeftCorner":
            points[0] = decodeData[k];
            break;
          case "topRightCorner":
            points[1] = decodeData[k];
            break;
          case "bottomRightCorner":
            points[2] = decodeData[k];
            break;
          case "bottomLeftCorner":
            points[3] = decodeData[k];
            break;
          default:
            break;
        }
      }
      context.lineWidth = 10;
      context.strokeStyle = "green";
      context.beginPath();
      console.log(points[0]);
      context.moveTo(points[0].x, points[0].y);
      for (const { x, y } of points) {
        context.lineTo(x, y);
      }
      context.lineTo(points[0].x, points[0].y);
      context.closePath();
      context.stroke();
    },
  },

  created(){
    let id = this.$route.params.estabId;
    this.$data.estabID = id;
  }
};
</script>

<style scoped>
  .h-100vh {
    height: 500px!important;
  }
</style>