<template>
  <!-- BEGIN: Top Bar -->
  <div
    class="
      top-bar-boxed
      -mt-7
      md:-mt-5
      -mx-3
      sm:-mx-8
      px-3
      sm:px-8
      md:pt-0
      mb-2
    "
  >
    <div class="h-full flex items-center">
      <!-- BEGIN: Logo -->
      <a href="" class="-intro-x hidden md:flex">
        <img
          alt="Icewall Tailwind HTML Admin Template"
          class="w-6"
          src="@/assets/images/blueswan.png"
        />
        <span class="text-white text-lg ml-3">
          blue<span class="font-medium">swan</span>
        </span>
      </a>
      <!-- END: Logo -->
      <div class="-intro-x breadcrumb mr-auto">
        <a href="">Application</a>
        <ChevronRightIcon class="breadcrumb__icon" />
        <a href="" class="breadcrumb--active">{{ currentRouteName }}</a>
      </div>
      <div class="intro-x dropdown mr-4 sm:mr-6">
        <div
          class="
            dropdown-toggle
            notification notification--bullet
            cursor-pointer
          "
          role="button"
          aria-expanded="false"
        >
          <BellIcon class="notification__icon dark:text-gray-300" />
        </div>
        <div class="notification-content pt-2 dropdown-menu">
          <div
            class="
              notification-content__box
              dropdown-menu__content
              box
              dark:bg-dark-6
            "
          >
            <div
              v-for="(line, index) in lineNotify"
              :key="index"
              class="flex items-stretch justify-between"
            >
              <div class="self-center mt-2">{{ line.name }}</div>
              <div class="self-center">
                <MazSwitch
                  v-model="line.status"
                  color="secondary"
                  class="mt-2"
                  @input="editLineNotify(line.id, line.status)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Notifications -->
      <!-- BEGIN: Account Menu -->
      <div class="intro-x dropdown w-8 h-8">
        <div
          class="
            dropdown-toggle
            w-8
            h-8
            rounded-full
            overflow-hidden
            shadow-lg
            image-fit
            zoom-in
            scale-110
          "
          role="button"
          aria-expanded="true"
        >
          <img
            alt="Icewall Tailwind HTML Admin Template"
            :src="require(`@/assets/images/profile-10.jpg`)"
          />
        </div>
        <div class="dropdown-menu w-56">
          <div
            class="
              dropdown-menu__content
              box
              bg-theme-11
              dark:bg-dark-6
              text-white
            "
          >
            <div class="p-4 border-b border-theme-12 dark:border-dark-3">
              <div class="font-medium">Admin</div>
              <div class="text-xs text-theme-13 mt-0.5 dark:text-gray-600">
                <!-- {{ $auth.loggedIn ? "สถานะ Login" : "สถานะไม่ได้ Login" }} -->
              </div>
            </div>
            <div class="p-2">
              <a
                href="#"
                class="
                  flex
                  items-center
                  p-2
                  transition
                  duration-300
                  ease-in-out
                  hover:bg-theme-2
                  dark:hover:bg-dark-3
                  rounded-md
                "
                @click="getDataProfileAdmin()"
              >
                <UserIcon class="w-4 h-4 mr-2" /> Profile
              </a>
            </div>
            <div class="p-2 border-t border-theme-12 dark:border-dark-3">
              <button
                @click="logout"
                class="
                  flex
                  items-center
                  p-2
                  transition
                  duration-300
                  ease-in-out
                  hover:bg-theme-2
                  dark:hover:bg-dark-3
                  rounded-md
                  w-full
                "
              >
                <ToggleRightIcon class="w-4 h-4 mr-2" /> Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- END: Account Menu -->
    </div>
  </div>
  <!-- END: Top Bar -->
</template>

<script>
import alertMixins from "~/mixins/alertMixin";

export default {
  components: {
  },
  mixins: [alertMixins],
  data() {
    return {
      searchDropdown: false,
      genderAdmin: "",
      dataProfileAdmin: "",
      dataPositionAdmin: "",
      formEditAdmin: "",
      lineNotify: "",
    };
  },
  methods: {
    showSearchDropdown() {
      this.searchDropdown = true;
    },
    hideSearchDropdown() {
      this.searchDropdown = false;
    },
    wowowo() {

    },

    async logout() {
      await this.$auth.logout();
      setTimeout(() => {
        this.$router.go();
      }, 500);
    },
  },
  computed: {
    crumbs() {
      console.log("this.$route.path: ", this.$route.path);
      let pathArray = this.$route.path.split("/");
      console.log("let pathArray: ", pathArray);
      pathArray.shift();
      let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        try {
          breadcrumbArray.push({
            path: path,
            to: breadcrumbArray[idx - 1]
              ? "/" + breadcrumbArray[idx - 1].path + "/" + path
              : "/" + path,
            text: this.$route.matched[idx].name || path,
          });
        } catch (error) {
          breadcrumbArray.push({
            path: path,
            to: breadcrumbArray[idx - 1]
              ? "/" + breadcrumbArray[idx - 1].path + "/" + path
              : "/" + path,
            text: "NA",
          });
        }
        return breadcrumbArray;
      }, []);
      return breadcrumbs;
    },
    currentRouteName: function () {
      return this.$route.name;
    },
  },
};
</script>
