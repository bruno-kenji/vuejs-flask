<template lang="pug">
    .data-grid
        h3 {{title}}
        v-data-table(
            v-bind:headers="headers"
            :items="items"
            hide-actions
            class="elevation-1"
        )
            template(
                slot="items"
                slot-scope="props"
            )
                td {{ props.item.name }}
                td.text-xs-right {{ props.item.surname }}
</template>

<style lang="styl" scoped>
    @import "~styles/vaadin-test.styl"
</style>

<script>
    import {
    Vuetify,
    VApp,
    VDataTable
    } from 'vuetify'

    export default {
        /* eslint-disable */
        data () {
            return {
                label: 'Select a date',
                date: '2016-12-31',
                title: 'TestVaadin',
                items: [
                    {"name": "John", "surname": "Lehnon"},
                    {"name": "Ringo", "surname": "Starr"}
                ],
                headers: [
                    {
                        text: 'Dessert (100g serving)',
                        align: 'left',
                        sortable: false,
                        value: 'name'
                    },
                    { text: 'Surname', value: 'surname' },
                ],
            }
        },
        components: {
        },
        methods: {
            onDateChange () {
                console.log(this.items)
            },
        }
    }
</script>
