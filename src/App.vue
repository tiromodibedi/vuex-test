<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex State Management</h1>
                <app-result></app-result>
                <hr>
                <app-another-result></app-another-result>
                <hr>
                <app-counter></app-counter>
                <hr>
                <app-async-counter></app-async-counter>
                <hr>
                <app-counter-ten></app-counter-ten>
            </div>
        </div>
    </div>
</template>

<script>
    import AnotherResult from './components/AnotherResult.vue';
    import AsyncCounter from './components/AsyncCounter.vue'
    import CounterTen from './components/CounterTen.vue';
    import Counter from './components/Counter.vue';
    import Result from './components/Result.vue';

    export default {
        components: {
            appAnotherResult: AnotherResult,
            appAsyncCounter: AsyncCounter,
            appCounterTen: CounterTen,
            appCounter: Counter,
            appResult: Result,
        }
    }
</script>

