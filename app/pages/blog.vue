<template>
  <div>
    <the-title titlestring='Journal'/>
    <!-- <about-content /> -->
   <Blogs />
    
  </div>
</template>

<script>
import Blogs from '@/components/Blogs'
import TheTitle from '@/components/TheTitle'

export default {
  name: 'Blog',
  components: {
    Blogs,
    'the-title': TheTitle
  }
}
</script>
