(function (App) {
    var get = Ember.get,
        set = Ember.set;

    App.PostsController = Ember.ArrayController.extend(Ember.PageableMixin, {
        searchQuery: null,

        search: Ember.observer(function () {
            var searchQuery = get(this, 'searchQuery');
            var posts;

            if (searchQuery) {
                posts = App.Post.find({
                    query: searchQuery
                });
            } else {
                posts = App.Post.find();
            }

            set(this, 'content', posts);

        }, 'searchQuery')
    });
})(window.App);
