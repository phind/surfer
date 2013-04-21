(function (App) {

App.SearchField = Ember.TextField.extend({
    placeholder: "Search ...",

    insertNewline: function () {
        if (this.get('value') === '') {
            App.contentController.clear();
        } else {
            App.contentController.search(this.get('value'));
        }
    },
});

})(window.App);

