<template>
    <Layout :title="discussion.title" v-if="discussion">
        <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-600 p-4" role="alert"
             v-if="discussion.removed">
            <p class="font-bold">Heads up!</p>
            <p>This discussion has been deleted by Bunq.</p>
        </div>
        <div class="px-10 my-4 py-6 bg-white rounded-lg shadow-md" v-for="post in discussion.posts"
             v-bind:key="post.id" v-bind:class="{ 'bg-teal-100': post.removed || discussion.removed }">
            <div class="flex justify-between items-center mt-4">
                <a class="flex items-center" href="#">
                    <img class="mr-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                         :src="post.user.avatarUrl"
                         alt="avatar">
                    <h1 class="text-gray-700 font-bold">{{ post.user.displayName }}</h1>
                </a>
                <i class="gg-chevron-down"></i>
            </div>
            <div class="mt-2">
                <div class="mt-4 text-gray-600" v-html="post.contentHtml">
                </div>
            </div>
            <div class="flex justify-between items-center mt-6">
                <span class="font-light text-gray-600"
                      v-tooltip="{ content: new Date(post.timestamp * 1000).toLocaleString(), placement: 'bottom' }">{{ post.timestamp | moment("from") }}</span>
                <span class="mb-3 px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500" href="#">Removed</span>
            </div>
        </div>
    </Layout>
    <div v-else>
        <div class="flex items-center justify-center h-screen">
            <div class="bg-red-100 border-t-4 border-red-400 rounded-b text-red-900 px-4 py-3 shadow-md my-2">
                <div class="flex">
                    <div class="py-1">
                        <i class="gg-info fill-current h-6 w-6 text-red-500 mr-4"></i>
                    </div>
                    <div>
                        <p class="font-bold">
                            Sorry, it looks like this discussion does not exist.
                        </p>
                        <p class="text-sm">
                            Please check the URL and try again.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import gql from "graphql-tag";
    import Layout from "../../components/PageLayout";

    export const DiscussionQuery = gql`
        query Discussion($id: Float!) {
            discussion (id: $id)  {
                title
                removed
                posts {
                    contentHtml
                    removed
                    timestamp
                    user {
                        username
                        displayName
                        avatarUrl
                    }
                }
            }
        }`

    export default {
        name: "DiscussionShow",

        components: {
            Layout
        },

        apollo: {
            discussion() {
                return {
                    query: DiscussionQuery,
                    variables() {
                        return {
                            id: this.discussionId,
                        }
                    }
                }
            },
        },

        data() {
            return {
                discussion: {},
                discussionId: parseInt(this.$route.params.id),
                testTitle: 'Bb'
            }
        }
    }
</script>

<style scoped>

</style>