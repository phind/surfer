(function (App) {
    var posts = Ember.ArrayController.create({ content: [] });

    $.ajax({
        url: '/posts',
        success: function (data) {
            posts.addObjects(data.map(function (each) {
                return Ember.Object.create(each);
            }));
        }
    });

    App.Post = Ember.Object.create({
        find: function (arg) {
            if (arg) {
                return posts[arg];
            }

            return posts;
        },
    });
})(window.App);
