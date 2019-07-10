<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({count: 33, duration: 500})">Async Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({count: 33, duration: 500})">Async Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        methods: {
            // map actions automatically
            ...mapActions([
              'asyncIncrement',
              'asyncDecrement'
            ])
        }
    }
  // mutations must be synchronous operations
  // otherwise we won't be able to track which mutation was responsible for which changes
  // we also want to run async tasks so how do we do this?
</script>