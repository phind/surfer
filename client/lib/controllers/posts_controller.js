(function (App) {
    Ember.PaginationMixin = Ember.Mixin.create({
        page: 0,
        pageSize: 10,

        view: function () {
            return this.get('content').slice(this.get('page') *
                   this.get('pageSize'), this.get('pageSize'));

        }.property('[]', 'page', 'pageSize')
    });

    App.PostsController = Ember.ArrayController.extend(Ember.PaginationMixin);
})(window.App);
