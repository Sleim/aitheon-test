<template>
   <div class="posts-holder">
     <h2 class="posts-holder__title">
       List of posts is provided below. To open any post, click on the eye icon.
     </h2>
     <table class="posts-holder__table">
       <thead>
        <tr>
          <th>Id</th>
          <th>UserId</th>
          <th>Title</th>
          <th>Body</th>
          <th>Action</th>
        </tr>
       </thead>
       <tbody>
        <tr v-for="(post, key) in list" :key="key">
          <td>{{ post.id }}</td>
          <td>{{ post.userId }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
          <td>
            <router-link class="post-link" tag="a" title='Open post' :to="{ path: `/post/${post.id}`}">
              <icon name="eye" />
            </router-link>
          </td>
        </tr>
       </tbody>
     </table>
   </div>
</template>

<script>
export default {
  name: "HomeTable",
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

    &__table {
      border-collapse: collapse;

      th, td {
        padding: 15px;
        border: 1px solid grey;
        background: #ececec;
      }
      
      .eye {
        cursor: pointer;
      }

      .post-link {
        color: inherit;
      }
    }
  }
</style>