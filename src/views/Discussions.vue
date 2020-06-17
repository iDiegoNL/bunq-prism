<template>
    <div>
        Discussions placeholder
    </div>
</template>

<script>
    import gql from 'graphql-tag'

    export default {
        name: 'Discussions',

        apollo: {
            discussions: gql`
                query {
                    discussions {
                        total
                        done
                        items {
                            title
                        }
                    }
                }`,
        },

        data() {
            return {
                discussions: Object
            }
        }
    }
</script>
