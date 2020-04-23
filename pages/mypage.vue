<template>
  <section>
    <div v-if="isLoading" />
    <div v-else>
      <h1 class="title pagetitle">
        マイページ
      </h1>
      <div class="card">
        <div>
          <h1 class="title">
            ユーザ情報
          </h1>

          <b-button
            @click="isComponentModalActive = true"
            class="edit-button is-text"
            icon-left="pencil"
            style="color:#929292;"
          >
            <span>編集する</span>
          </b-button>
        </div>

        <p>
          <a href="https://wwww.twinte.net/sponsorship/index.html">寄付者一覧</a>に表示するお名前とリンクです。
        </p>

        <div>
          <section class="userinfo">
            <h2 class="has-text-primary has-text-weight-bold">
              現在の表示名
            </h2>
            <p>{{ userName | unregisterd }}</p>
          </section>
          <section class="userinfo">
            <h2 class="has-text-primary has-text-weight-bold">
              リンク
            </h2>
            <p>{{ userUrl | unregisterd }}</p>
          </section>
        </div>

        <b-modal
          :active.sync="isComponentModalActive"
          has-modal-card
          trap-focus
          aria-role="dialog"
          aria-modal
        >
          <edit-modal v-on:edited="updateUserInfo" />
        </b-modal>
      </div>
      <div class="card">
        <h1 class="title">
          サブスクリプションの登録状況
        </h1>
        <h2 class="has-text-primary has-text-weight-bold">
          ご利用中のプラン
        </h2>
        <div v-show="loading1" class="loading-container">
          <div class="contents-loader" />
        </div>
        <div v-for="item in history" :key="item.subscription_id" class="history">
          <span style="line-height:36px" class="has-text-weight-bold">
            {{ item.plan[0].name }}寄付
          </span>
          <!-- <li>登録日：{{ item.start_at | formatDate }}</li> -->

          <b-button
            v-on:click="deletePlan(item.subscription_id)"
            class="delete-button  is-danger"
            outlined
          >
            解約
          </b-button>
        </div>
      </div>
      <div class="card">
        <h1 class="title">
          寄付の履歴
        </h1>
        <div v-show="loading2" class="loading-container">
          <div class="contents-loader" />
        </div>
        <div v-for="item in paymentItems" :key="item.id" class="history">
          <div v-if="item.status==='succeeded'" class="columns is-mobile">
            <div class="column is-5-mobile is-3-tablet is-2-desktop">
              {{ item.paid_at | formatDate }}
            </div>
            <div class="column">
              <div class="columns is-gapless">
                <div class="column is-5-mobile is-3-tablet is-1-desktop">
                  <p>{{ item.amount }}円</p>
                </div>
                <div class="column">
                  <p class="has-text-grey">
                    {{ item.type | type }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr class="is-marginless">
        </div>
        <b-button v-if="isShow && paymentItems.length !==0" @click="readMore" type="is-primary">
          もっとみる
        </b-button>
      </div>
    </div>
  </section>
</template>

<script>
import EditModal from '@/components/EditModal'
export default {
  components: {
    EditModal
  },
  // middleware: 'authenticated',
  filters: {
    type (value) {
      return value === 'Subscription' ? 'サブスクリプションによる寄付' : '一回きりの決済による寄付'
    },
    unregisterd (value) {
      return value === null ? '未登録' : value
    }
  },
  data () {
    return {
      payments: [],
      userName: '',
      userUrl: '',
      history: null,
      displayItems: 3,
      isShow: true,
      isLoading: true,
      isComponentModalActive: false,
      loading1: true,
      loading2: true
    }
  },
  computed: {
    paymentItems () {
      return this.payments.filter(e => e.status === 'succeeded').slice(0, this.displayItems) // paymentから成功のものを取り出し表示する分をpaymemtItemsへ
    }
  },
  async created () {
    await this.$store.dispatch('login');
    (!this.$store.getters.authorized ? this.$router.push('/login') : this.isLoading = false)
  },
  mounted () {
    this.$axios.get('/payment/')
      .then((response) => { this.payments = response.data; this.loading2 = false })
    this.$axios.$get('/payment/subscriptions')
      .then((response) => { this.history = response; this.loading1 = false })
    this.$axios.get('/payment/users/me')
      .then(response => (this.userName = response.data.nickname))
    this.$axios.get('/payment/users/me')
      .then(response => (this.userUrl = response.data.link))
  },
  methods: {
    updateUserInfo (editnickname, editlink) {
      this.$axios.patch('/payment/users/me', {
        nickname: editnickname,
        link: editlink
      }
      )
        .then(() => this.$buefy.toast.open({
          message: '正常に更新できました.',
          type: 'is-success'
        }))
        .then(() => this.$router.push('/'))
        .catch((response) => {
          console.log(response)
          this.$buefy.toast.open({
            message: '更新に失敗しました.',
            type: 'is-danger'
          })
        })
    },
    deletePlan (planId) {
      this.$swal({
        text: 'このサブスクリプリプションを解約しますか?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'はい',
        cancelButtonText: 'いいえ'
      }).then((result) => {
        if (result.value) {
          this.$axios.$delete('/payment/subscriptions/' + planId)
            .then(
              this.$buefy.toast.open({
                message: '解約しました',
                type: 'is-success'
              })
            ).then(this.$router.push('/'))
        }
      })
    },
    readMore () {
      this.isShow = false
      this.displayItems = this.payments.filter(e => e.status === 'succeeded').length
    }
  }
}
</script>

<style scoped lang="scss">
.history {
  margin: 1em;
}
.userinfo {
  margin-top: 1rem
}
.edit-button {
  position:absolute;
  top: 2rem;
  right: 2rem;
  text-decoration: none
}
.delete-button {
  text-decoration: none
}

.title{
    border-left: 5px solid #00c0c0;
    padding-left: 1rem;
}
.title.pagetitle{
    border: initial;
    padding-left: initial;
}

.loading-container{
  height:5em;
}

.contents-loader,
.contents-loader:before,
.contents-loader:after {
  background: #00c0c0;
  -webkit-animation: load1 1s infinite ease-in-out;
  animation: load1 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
}
.contents-loader {
  color: #00c0c0;
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}
.contents-loader:before,
.contents-loader:after {
  position: absolute;
  top: 0;
  content: '';
}
.contents-loader:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}
.contents-loader:after {
  left: 1.5em;
}
@-webkit-keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
@keyframes load1 {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
</style>
