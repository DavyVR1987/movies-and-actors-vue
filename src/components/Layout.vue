<template>
  <app-header />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'

export default {
  name: 'layout',
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
    html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    }

    body {
    background: #1D272F url('https://dd6zx4ibq538k.cloudfront.net/static/images/2395/1e3712670769229210f9f8bac4e67fac_1349_1200.png') no-repeat;
    background-position: right 0 top 0;
    }

    h1, h4, li, label{
      color: #e9eaeb;
    }    
</style>