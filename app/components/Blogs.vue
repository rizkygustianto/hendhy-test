<template>
  <section class="bg-white border-b py-8">
    <div class="container max-w-5xl mx-auto m-8">
        <div class="grid lg:grid-cols-3 md:grid-cols-3 gap-2">
            <div v-for="post of posts" :key="post.id">
                <blog-card :postTitle=post.title :postImage=post.image_url :postAuthor=post.author />
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import BlogCard from '@/components/BlogCard'
// import BlogCard from './BlogCard.vue'

export default {
  name: 'Blogs',
  components: {
    'blog-card': BlogCard
  },
  async fetch() {
    this.posts = await fetch(
        'http://localhost:3000/posts'
        ).then(res => res.json())
  },
  data() {
      return {
          posts: []
      }
  }
}
</script>
