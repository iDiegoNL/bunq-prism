<template>
    <div>
        <!-- TODO: Make this a component -->
        <section class="bg-indigo-dark h-50 p-8">
            <div class="container mx-auto py-8">
                <input class="w-full h-16 px-3 rounded focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg bg-gray-100"
                       type="search" placeholder="Search all discussions...">
            </div>
        </section>

        <div class="flex flex-col">
            <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
                    <table class="min-w-full">
                        <thead>
                        <tr>
                            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Author
                            </th>
                            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Title
                            </th>
                            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Created at
                            </th>
                            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                        </tr>
                        </thead>
                        <tbody class="bg-white" v-for="item in discussions.items" v-bind:key="item.title">
                        <tr>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div class="flex items-center">
                                    <div class="flex-shrink-0 h-10 w-10">
                                        <img class="h-10 w-10 rounded-full"
                                             :src="item.user.avatarUrl"
                                             alt=""/>
                                    </div>
                                    <div class="ml-4">
                                        <div class="text-sm leading-5 font-medium text-gray-900">
                                            {{ item.user.displayName }}
                                        </div>
                                        <div class="text-xs leading-5 text-gray-500">
                                            {{ item.user.username }}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <div class="text-sm leading-5 text-gray-900">
                                    {{ item.title }}
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                                <div class="text-sm leading-5 text-gray-900">
                                    {{ item.startTimestamp }}
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-300 text-red-900"
                                      v-if="item.removed">
                                    Removed
                                </span>
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                                      v-else>
                                    Active
                                </span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="1000"></div>
    </div>
</template>

<script>
    import gql from 'graphql-tag'

    export default {
        name: 'Discussions',

        apollo: {
            discussions() {
                // This is called once when the component is created
                // It must return the option object
                return {
                    // gql query
                    query: gql`
                        query Discussions($skip: Float!, $take: Float!) {
                            discussions (pagination: { skip: $skip, take: $take })  {
                                total
                                done
                                items {
                                    id
                                    title
                                    startTimestamp
                                    removed
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
                            take: this.take,
                            skip: this.skip,
                        }
                    }
                }
            },
        },

        methods: {
            loadMore: function () {
                this.busy = true;

                setTimeout(() => {
                    let i = 0, j = 10;
                    for (; i < j; i++) {
                        this.take++;
                        this.skip++;
                    }
                    this.busy = false;
                }, 1000);

                console.log('Take: ' + this.take);
                console.log('Skip: ' + this.skip);
            }
        },

        data() {
            return {
                discussions: {},
                busy: true,
                take: 10,
                skip: 0,
            }
        }
    }
</script>
