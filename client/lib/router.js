(function(App) {
    App.Router.map(function() {
        this.resource('posts');
        App.PostsRoute = Ember.Route.extend({
            model: function() {
                return App.Post.find();
            }
        });

        this.resource('post', {
            path: '/posts/:post_id'
        });
    });
})(window.App);
