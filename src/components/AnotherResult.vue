<template>
  <div>
    <p>Double Counter is: {{ doubleCounter }}</p>
    <p>Number of Clicks: {{ stringCounter }} </p>
  </div>
</template>

<script>
// helper methods for mapping getters
import { mapGetters } from 'vuex';
import * as types from '../store/types';

export default {
  computed: {
    // use the spread operator to pull out properties in the mapGetters
    ...mapGetters({
      doubleCounter: types.DOUBLE_COUNTER,
      stringCounter: types.CLICK_COUNTER
    })
  }
  // computed: {
  //   counter() {
  //     return this.$store.getters.doubleCounter;
  //   },
  //   clicks() {
  //     return this.$store.getters.stringCounter;
  //   }
  // }
}
</script>
