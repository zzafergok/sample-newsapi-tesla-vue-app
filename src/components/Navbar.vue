<template>
  <nav class="navbar">
    <div class="container">
      <div class="row">
        <div class="col-5 navbar-logo-link-group">
          <div class="navbar-logo">
            <a class="navbar-logo-link" href="/">
              <img src="../assets/icecat_logo.webp" alt="Icecat" />
            </a>
          </div>
          <div class="navbar-brand-wrapper">
            <a class="navbar-brand-wrapper-home" href="/"> Home </a>
          </div>
        </div>
        <div class="col-7 navbar-brand-search" v-if="isExist">
          <SearchBar @searchArray="handleSearch" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import SearchBar from "./SearchBar.vue";
export default {
  /* eslint-disable */
  name: "Navbar",
  components: {
    SearchBar,
  },
  props: {
    detail: Object,
  },
  methods: {
    handleSearch(searchArray) {
      this.$emit("searchArray", searchArray);
    },
  },
  computed: {
    isExist: function () {
      if (
        window.location.pathname === "/" ||
        window.location.pathname === "/business" ||
        window.location.pathname === "/entertainment" ||
        window.location.pathname === "/general" ||
        window.location.pathname === "/health" ||
        window.location.pathname === "/science" ||
        window.location.pathname === "/sports" ||
        window.location.pathname === "/technology"
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: #fff;
  border-bottom: 1px solid #ece9e6;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1em;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  @media (min-width: 551px) {
    height: 3rem;
  }
  @media (min-width: 320px) and (max-width: 550px) {
    height: 7rem;
  }

  .container {
    display: flex;
    align-items: center;

    padding-right: 0;
    max-width: 1200px;
    @media (min-width: 650px) {
      padding-left: 7.5rem;
    }
    .row {
      width: 100% !important;

      @media (min-width: 320px) and (max-width: 550px) {
        display: block !important;
      }

      .navbar-logo-link-group {
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media (min-width: 320px) and (max-width: 550px) {
          margin-bottom: 0.75rem;
          flex: 0 0 100% !important;
          max-width: 100% !important;
        }
        .navbar-logo {
          display: flex;
          align-items: center;
          .navbar-logo-link {
            img {
              height: 20px;
            }
          }
        }

        .navbar-brand-wrapper {
          display: flex;
          align-items: center;
          @media (min-width: 680px) and (max-width: 768px) {
            margin-right: 1rem;
          }
          @media (min-width: 769px) and (max-width: 800px) {
            margin-right: 3rem;
          }
          @media (min-width: 801px) {
            margin-right: 5rem;
          }
          a {
            text-decoration: none;
            font-size: 1.5rem;
            color: rgb(35, 35, 35);
            border-bottom: 2px solid transparent;

            &:hover {
              border-bottom-color: #3755a0;
            }
          }
        }
      }

      .navbar-brand-search {
        @media (min-width: 320px) and (max-width: 550px) {
          flex: 0 0 100% !important;
          max-width: 100% !important;
        }

        div {
          @media (min-width: 320px) and (max-width: 550px) {
            display: flex;
            justify-content: space-between;
          }

          input {
            @media (min-width: 320px) and (max-width: 550px) {
              width: 68%;
            }
          }
        }
      }
    }
  }
}

.navbar-flag {
  height: 3rem !important;
}

.navbar-logo-link-group-flag {
  margin-bottom: 0rem !important;
}
</style>
