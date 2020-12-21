<template>
  <div>
    <header />
    <features />
    <teasers />
    <prices />
    <call-to-action />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Features from '@/components/Features'
import Teasers from '@/components/Teasers'
import Prices from '@/components/Prices'
import CallToAction from '@/components/CallToAction'

export default {
  name: 'About',
  components: {
    header: Header,
    features: Features,
    teasers: Teasers,
    prices: Prices,
    'call-to-action': CallToAction
  }
}
</script>
