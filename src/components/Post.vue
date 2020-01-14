<template>
  <div class="post">
    <g-link :to="post.path">
      <img
        v-if="post.featuredMedia"
        :src="post.featuredMedia.sourceUrl"
        :width="post.featuredMedia.mediaDetails.width"
        :alt="post.featuredMedia.altText"
      />
      <div class="post-content">

      <h2 v-html="post.title" />
      <div v-html="post.excerpt" />
      </div>
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
.post {
  background-color: white;
  border: 5px solid black;

  a{
    text-decoration: none;
    color: black;
  }
  img{
    width: 100%;
  }
  .post-content{
    padding: 20px;
  }
  &:hover{
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.17);
  }
}
</style>
