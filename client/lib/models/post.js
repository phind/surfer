(function (App) {
    App.Post = Ember.Object.create({
        find: function (arg) {
            if (! arg) {
                return [ Ember.Object.create({
                    id: 1,
                    title: 'ok'
                })];
            } else {
                return Ember.Object.create({
                    title: arg
                });
            }
        }
    });
})(window.App);
