(function (App) {

App.SearchField = Ember.TextField.extend({
    placeholder: 'Search ...',

    insertNewline: function () {
        this.set('controller.searchQuery', this.get('value'));
    },
});

})(window.App);

