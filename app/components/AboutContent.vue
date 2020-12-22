<template>
  <section class="bg-white border-b py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <!-- <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        What We Do
      </h1> -->
      <!-- <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div> -->
      <feature-right
        headline="Lorem Ipsum"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque velit odio, eget accumsan justo malesuada vitae. Suspendisse potenti. Suspendisse potenti. Aliquam molestie, ex quis eleifend fermentum, augue tellus aliquam magna, quis porta eros purus in massa. Praesent consequat purus eu ultrices varius. Nunc placerat nunc et turpis tristique hendrerit. Vestibulum tincidunt diam facilisis, feugiat urna in, vestibulum lorem. Morbi fringilla volutpat tortor vitae placerat. Praesent et metus hendrerit, cursus erat at, ultricies elit. Morbi id lorem ex. Ut vitae faucibus lacus. Sed at ultrices sapien. Sed finibus, massa ac accumsan ornare, turpis sapien vestibulum felis, sit amet vehicula nisl metus non erat. Proin vestibulum, augue sit amet condimentum condimentum, eros lectus tincidunt leo, in dictum libero risus ut tellus. Curabitur ex orci, ultrices non enim id, iaculis lobortis leo."
      >
        <img src="~assets/img/6308.jpg" alt slot="svg" />
      </feature-right>
      <feature-left
        headline="Lorem Ipsum"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras scelerisque velit odio, eget accumsan justo malesuada vitae. Suspendisse potenti. Suspendisse potenti. Aliquam molestie, ex quis eleifend fermentum, augue tellus aliquam magna, quis porta eros purus in massa. Praesent consequat purus eu ultrices varius. Nunc placerat nunc et turpis tristique hendrerit. Vestibulum tincidunt diam facilisis, feugiat urna in, vestibulum lorem. Morbi fringilla volutpat tortor vitae placerat. Praesent et metus hendrerit, cursus erat at, ultricies elit. Morbi id lorem ex. Ut vitae faucibus lacus. Sed at ultrices sapien. Sed finibus, massa ac accumsan ornare, turpis sapien vestibulum felis, sit amet vehicula nisl metus non erat. Proin vestibulum, augue sit amet condimentum condimentum, eros lectus tincidunt leo, in dictum libero risus ut tellus. Curabitur ex orci, ultrices non enim id, iaculis lobortis leo."
      >
        <img src="~assets/img/5237.jpg" alt slot="svg" />
      </feature-left>
    </div>
  </section>
</template>

<script>
import FeatureRight from '@/components/FeatureRight'
import FeatureLeft from '@/components/FeatureLeft'

export default {
  name: 'AboutContent',
  components: {
    'feature-right': FeatureRight,
    'feature-left': FeatureLeft,
  },
}
</script>
