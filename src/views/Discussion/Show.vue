<template>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div class="px-10 my-4 py-6 bg-white rounded-lg shadow-md" v-for="post in discussion.posts" v-bind:key="post.id">
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
                <!-- TODO: Display tooltip with exact date on hover -->
                <span class="font-light text-gray-600">{{ post.timestamp | moment("from") }}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import gql from "graphql-tag";

    export default {
        name: "DiscussionShow",

        apollo: {
            discussion() {
                return {
                    query: gql`
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
                        }`,
                    variables() {
                        return {
                            // TODO: When you manually refresh the page right now, you get an error. Probably because Apollo makes the request before te route param from below is available.
                            id: this.$route.params.discussion_id,
                        }
                    }
                }
            },
        },

        data() {
            return {
                discussion: {},
            }
        }
    }
</script>

<style scoped>

</style>