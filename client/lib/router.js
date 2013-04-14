(function(App) {
    App.Router.map(function() {
        this.resource('post', {
            path: '/posts/:post_id'
        });
    });
})(window.App);
