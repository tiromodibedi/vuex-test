<template>
    <div>
        <div class="input-value">
          <input type="number" placeholder="value" v-model="value">
          <p>value: {{ value }} </p>
        </div>
        <hr>
        <button class="btn btn-primary" @click="increment(1)">Increment</button>
        <button class="btn btn-primary" @click="decrement(1)">Decrement</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    export default {
        methods: {
            // map mutations automatically
            ...mapMutations([
              'increment',
              'decrement'
            ])
        },
        computed: {
          // computed properties can have getters and setters
          value: {
            get() {
              return this.$store.getters.value;
            },
            set(value) {
              this.$store.dispatch('updateValue', value);
            }
          }
        }
    }
  // mutations must be synchronous operations
  // otherwise we won't be able to track which mutation was responsible for which changes
  // we also want to run async tasks so how do we do this?
</script>

<style>
  .input-value {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
</style>
