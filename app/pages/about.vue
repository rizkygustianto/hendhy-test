<template>
  <div>
    <the-title titlestring='About Us'/>
    <about-content />
    
  </div>
</template>

<script>
import TheTitle from '@/components/TheTitle'
import Features from '@/components/Features'
import Teasers from '@/components/Teasers'
import Prices from '@/components/Prices'
import CallToAction from '@/components/CallToAction'
import AboutContent from '@/components/AboutContent.vue'

export default {
  name: 'About',
  components: {
    'the-title': TheTitle,
    'about-content': AboutContent,
    teasers: Teasers,
    prices: Prices,
    'call-to-action': CallToAction
  }
}
</script>
