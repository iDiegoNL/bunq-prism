<template>
    <div>
        <header class="bg-white shadow">
            <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <h1 class="text-3xl font-bold leading-tight text-gray-900 capitalize">
                    {{ title }}
                </h1>
                <div class="bg-teal-100 border-t-4 border-red-400 rounded-b text-teal-900 px-4 py-3 shadow-md my-2 max-w-4xl"
                     v-if="deletedDiscussion">
                    <div class="flex">
                        <div class="py-1">
                            <i class="gg-trash fill-current h-6 w-6 text-teal-500 mr-4"></i>
                        </div>
                        <div>
                            <p class="font-bold">
                                You're currently viewing a deleted discussion
                            </p>
                            <p class="text-sm">
                                This discussion was deleted by one of the Bunq staff members.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <slot></slot>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: "PageLayout",

        props: {
            title: {
                type: String,
            },
            deletedDiscussion: {
                default: null,
            },
        }
    }
</script>

<style scoped>

</style>