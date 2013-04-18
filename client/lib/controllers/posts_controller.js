(function (App) {
    Ember.PaginationMixin = Ember.Mixin.create({
        page: 0,
        pageSize: 10,

        pageCount: function () {

            return Math.ceil(this.get('content.length') /
                this.get('pageSize'));

        }.property('content.length', 'pageSize'),

        view: function () {
            var pageSize = this.get('pageSize');
            var start = this.get('page') * pageSize;
            var end = start + pageSize;
            return this.get('content').slice(start, end);

        }.property('[]', 'page', 'pageSize')
    });

    App.PostsController = Ember.ArrayController.extend(Ember.PaginationMixin);
})(window.App);
