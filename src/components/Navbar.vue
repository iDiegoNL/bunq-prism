<template>
    <div>
        <nav class="bg-gray-800">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16">
                    <div class="flex items-center">
                        <div class="flex-shrink-0 text-white">
                            Bunq PRiSM
                        </div>
                        <div class="ml-10 flex items-baseline">
                            <router-link :to="{ name: 'Discussions' }"
                                         class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                                         active-class="text-white bg-gray-900">
                                Discussions
                            </router-link>
                            <router-link :to="{ name: 'Posts' }"
                                         class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                                         active-class="text-white bg-gray-900">
                                Posts
                            </router-link>
                            <router-link :to="{ name: 'Users' }"
                                         class="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                                         active-class="text-white bg-gray-900">
                                Users
                            </router-link>
                        </div>
                    </div>
                    <div class="ml-4 flex items-center md:ml-6">
                        <router-link
                                :to="{ name: 'About' }"
                                class="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
                                aria-label="Info">
                            <i class="gg-info"></i>
                        </router-link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>

</style>