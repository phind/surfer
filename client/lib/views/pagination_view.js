(function (App) {
    var prev = 'p', next = 'n';
//     var prev = '«', next = '»';

    App.PaginationView = Ember.ContainerView.extend({
        childViews: [ 'pagesView' ],
        classNames: [ 'pagination', 'pagination-centered' ],
        
        pagesView: Ember.CollectionView.extend({
            tagName: 'ul',
            content: Ember.computed('controller.pageCount', 'controller.pageNumber', function () {
                var page = this.get('controller.pageNumber');
                var pageCount = this.get('controller.pageCount') - 1;
                var pages = [ prev ];
                var pageRange = 3;

                var min = Math.max(0, page - pageRange);
                var max = Math.min(pageCount, page + pageRange);
                if (page - pageRange < 0) {
                    max += pageRange - page;
                }
                if (page + pageRange > max) {
                    min -= (pageRange + page) - max;
                }

                for (var i = min; i < max; i++) {
                    pages.push(i);
                }

                pages.push(next);

                return pages;
            }),

            itemViewClass: Ember.View.extend({
                classNameBindings: [ 'active', 'disabled' ],
                
                active: Ember.computed('controller.pageNumber', function () {
                    return this.get('controller.pageNumber') === this.get('content');
                }),

                disabled: Ember.computed('controller.pageNumber', 'controller.pageCount', function () {
                    var content = this.get('content');
                    var page = this.get('controller.pageNumber');

                    if (content === prev) {
                        return page === 0;
                    } else if (content === next) {
                        return page === this.get('controller.pageCount') - 2;
                    }

                    return false;
                }),

                click: function (event) {
                    this.get('controller').set('pageNumber', this.get('content'));
                    $('html, body').animate({ scrollTop: 0 }, 'fast');
                },

                template: Ember.Handlebars.compile('<a>{{view.content}}</a>')
            })
        })
    });
})(window.App);
