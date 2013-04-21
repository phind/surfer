(function (App) {
    App.contentController = Ember.ArrayController.create();
    setTimeout(function () {
        App.contentController.set('content', App.Post.find());
    }, 50);

    App.contentController.search = function (query) {
        this.set('content', 
            App.Post.find({
                query: query,
            })
        );
    };

    App.contentController.clear = function () {
        this.set('content', 
            App.Post.find()
        );
    };

    App.PostsRoute = Ember.Route.extend({
        model: function() {
            return App.contentController;
        }
    });
})(window.App);

