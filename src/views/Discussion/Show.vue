<template>
    <Layout :title="discussion.title">
        <div class="px-10 my-4 py-6 bg-white rounded-lg shadow-md" v-for="post in discussion.posts"
             v-bind:key="post.id">
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
                <span class="font-light text-gray-600" v-tooltip="{ content: new Date(post.timestamp * 1000).toLocaleString(), placement: 'bottom' }">{{ post.timestamp | moment("from") }}</span>
            </div>
        </div>
    </Layout>
</template>

<script>
    import gql from "graphql-tag";
    import Layout from "../../components/PageLayout";

    export const DiscussionQuery = gql`
        query Discussion($id: Float!) {
            discussion (id: $id)  {
                title
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