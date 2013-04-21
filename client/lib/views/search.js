(function (App) {

App.SearchField = Ember.TextField.extend({
    placeholder: "Search ...",

    keyDown: function (event) {
        if (event.keyCode === 13) {

        }
    },
});

})(window.App);

