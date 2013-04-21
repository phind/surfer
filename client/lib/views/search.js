(function (App) {

App.SearchField = Ember.TextField.extend({
    placeholder: "Search ...",

    insertNewline: function () {
        App.Post.find({
            query: this.get('value'),
        });
    },
});

})(window.App);

