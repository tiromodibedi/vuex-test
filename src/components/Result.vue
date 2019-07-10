<template>
    <p>Counter is: {{ normalCounter }}</p>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        computed: {
            ...mapGetters([
                'normalCounter'
            ])
        }
    }
</script>