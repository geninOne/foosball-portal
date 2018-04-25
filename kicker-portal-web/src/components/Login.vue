<template>
  <form novalidate class="md-layout md-alignment-center-center" @submit.stop.prevent="login()">
    <md-card class="md-layout-item md-size-50 md-small-size-100">
      <md-card-header>
        <div class="md-title">Login</div>
      </md-card-header>

      <md-card-content>
        <md-field>
          <label for="email">Email</label>
          <md-input type="email" name="email" id="email" v-model="form.email" />
        </md-field>
        <md-field>
          <label for="email">Password</label>
          <md-input type="password" name="password" id="password" v-model="form.password" />
        </md-field>
      </md-card-content>

      <md-card-actions>
        <md-button type="submit" class="md-primary">Login</md-button>
      </md-card-actions>
    </md-card>

  </form>
</template>

<script>
import Router from '../router';

export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
    };
  },
  methods: {
    login() {
      localStorage.setItem('userEmail', this.$data.form.email);
      Router.push('dashboard');
    },
  },
};
</script>

<style lang="scss" scoped>
  // clear styles from webkit autofill
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
  // end styles for webkit autofill
</style>
