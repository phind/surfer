(function(App) {
    App.Router.map(function() {
        this.resource('posts');

        this.resource('post', {
            path: '/posts/:post_id'
        });
    });

    App.PostsRoute = Ember.Route.extend({
        model: function () {
            return App.Post.find();
        }
    });

    App.IndexRoute = Ember.Route.extend({
        redirect: function () {
            this.transitionTo('posts');
        }
    });
})(window.App);
