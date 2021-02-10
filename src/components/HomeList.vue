<template>
   <div class="posts-holder">
     <h2 class="posts-holder__title">
       List of posts is provided below. To open any post, click on the eye icon.
     </h2>
     <div class="posts-list">
       <div class="posts-list__item" v-for="(post, key) in list" :key="key">
         <div class="post-left item-part">
            <p>Item id: {{ post.id }}</p>
            <p>Item user id: {{ post.userId }}</p>
         </div>
         <div class="post-right item-part">
           <h2 class="title">{{ post.title }}</h2>
           <p>{{ post.body }}</p>
         </div>
         <router-link class="post-link item-part" tag="a" title='Open post' :to="{ path: `/post/${post.id}`}">
           <icon name="eye" />
         </router-link>
       </div>
     </div>
   </div>
</template>

<script>
export default {
  name: "HomeList",
  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
  .posts-holder {
    padding: 25px 50px;

    &__title {
      margin-bottom: 50px;
    }

    .posts-list__item {
      background: #dadada;
      padding: 10px;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .item-part {
        margin: 0 5px;
      }

      .title {
        margin-bottom: 10px;
      }

      .eye {
        color: initial;
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    .posts-list__item {
      flex-direction: column;

      .post-left {
        display: none;
      }
      .post-right.item-part {
        margin-bottom: 10px;
      }
    }
  }
</style>