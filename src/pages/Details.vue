<template>
  <div>
    <Navbar :detail="detail" />
    <div class="container container-item-list">
      <div class="row">
        <div class="col-9">
          <div class="detail-header">
            <div class="detail-header-title">
              <h1>{{ detail.title }}</h1>
            </div>
            <div class="detail-header-date">
              <div>
                <p class="detail-header-date-label">Date:</p>
                <p class="detail-header-date-value">{{ detail.date }}</p>
              </div>
              <div>
                <p class="detail-header-date-label">Time:</p>
                <p class="detail-header-date-value">{{ detail.time }}</p>
              </div>
            </div>
            <div class="detail-header-image">
              <img :src="detail.image" :alt="detail.title" />
            </div>
          </div>
          <div class="detail-body">
            <div class="detail-body-content">
              <p>{{ detail.content }}</p>
            </div>
          </div>

          <div class="detail-footer" v-if="detail.author">
            <div class="detail-footer-label">
              <p>Author:</p>
            </div>
            <div class="detail-footer-author">
              <p>{{ detail.author }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "details-page",
  components: {
    Navbar,
    Footer,
  },
  data: function () {
    return {
      detail: {},
      searchDetail: {},
    };
  },
  mounted: function () {
    this.searchDetail = JSON.parse(localStorage.getItem("searchDetail"));
    if (this.searchDetail) {
      this.detail = this.searchDetail;
    } else {
      this.detail = JSON.parse(localStorage.getItem("detail"));
    }
  },
};
</script>

<style lang="scss" scoped>
.container-item-list {
  display: flex !important;
  flex-wrap: wrap !important;
  justify-content: center !important;
  max-width: 1200px !important;
  margin-block: 2rem !important;
  gap: 2rem !important;
  min-height: 90vh !important;

  .row {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    margin-top: 1.5rem !important;

    .col-9 {
      .detail-header {
        margin-bottom: 2rem;
        &-date {
          display: flex;
          justify-content: space-between;
          align-items: center;
          div {
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }

          &-label {
            color: rgb(99, 99, 99);
          }
          &-value {
            margin-left: 0.5rem;
            font-size: 1rem;
            font-weight: 600;
          }
        }
        &-image {
          img {
            max-width: 100%;
            display: block;
            object-fit: cover;
            border-radius: 10px;
          }
        }
      }

      .detail-body {
        margin-bottom: 2rem;
      }

      .detail-footer {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        p {
          text-decoration: underline;
        }

        &-label {
          color: rgb(99, 99, 99);
        }

        &-author {
          font-size: 1rem;
          font-weight: bold;
          margin-left: 0.5rem;
        }
      }
    }
  }
}
</style>
