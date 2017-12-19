<template lang="pug">
    .data-grid
        h3 {{title}}
        link(rel="import" href="static/bower_components/vaadin-date-picker/vaadin-date-picker.html")
        link(rel="import" href="static/bower_components/vaadin-grid/vaadin-grid.html")
        link(rel="import" href="static/bower_components/vaadin-grid-column/vaadin-grid-column.html")
        vaadin-date-picker(
            :label="label"
            :value="date"
            v-on:value-changed="onDateChange")
        vaadin-grid(:items="items")
            vaadin-grid-column
                template.header Name
                template {{item.name}}
            vaadin-grid-column
                template.header Surname
                template {{item.surname}}
</template>

<style lang="sass" scoped>
    @import "~styles/vaadin-test"
</style>

<script>
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
            item: {name: 'bla', surname: 'ble'},
        }
    },
    components: {

    },
    methods: {
        onDateChange () {
            console.log('é, mudou')
        }
    }
}
</script>
