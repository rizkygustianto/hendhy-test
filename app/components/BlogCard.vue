<template>
  <!-- Column -->
  <div class="my-1 px-1 w-full  lg:my-4 lg:px-4">
    <!-- Article -->
    <article class="overflow-hidden rounded-lg shadow-lg">
      <a href="#">
        <img
          alt="Placeholder"
          class="block h-auto w-full"
          v-bind:src="postImage"
        />
      </a>

      <header
        class="flex items-center justify-between leading-tight p-2 md:p-4"
      >
        <h1 class="text-lg">
          <a class="no-underline hover:underline text-black" href="#">
            {{ postTitle }}
          </a>
        </h1>
        <!-- <p class="text-grey-darker text-sm">14/4/19</p> -->
      </header>

      <footer class="flex items-center justify-between leading-none p-2 md:p-4">
        <a
          class="flex items-center no-underline hover:underline text-black"
          href="#"
        >
          <img
            alt="Placeholder"
            class="block rounded-full"
            src="https://picsum.photos/32/32/?random"
          />
          <p class="ml-2 text-sm">{{ postAuthor }}</p>
        </a>
        <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
          <span class="hidden">Like</span>
          <i class="fa fa-heart"></i>
        </a>
      </footer>
    </article>
    <!-- END Article -->
  </div>
  <!-- END Column -->
</template>

<script>
export default {
  name: 'BlogCard',
  props: ['postTitle', 'postImage', 'postAuthor'],
}
</script>