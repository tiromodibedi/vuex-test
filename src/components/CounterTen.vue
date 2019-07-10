<template>
    <div>
        <button class="btn btn-primary" @click="increment(10)">Increment By 10</button>
        <button class="btn btn-primary" @click="decrement(10)">Decrement By 10</button>
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
        }
    }
  // mutations must be synchronous operations
  // otherwise we won't be able to track which mutation was responsible for which changes
  // we also want to run async tasks so how do we do this?
</script>