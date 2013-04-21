(function(App) {
    App.Router.map(function() {
        this.resource('posts');

        this.resource('post', {
            path: '/posts/:post_id'
        });
    });

    App.IndexRoute = Ember.Route.extend({
        redirect: function () {
            this.transitionTo('posts');
        }
    });
})(window.App);
