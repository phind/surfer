(function (App) {
    App.Post = DS.Model.extend({
        placeName: DS.attr('string'),
        title: DS.attr('string'),
        content: DS.attr('string'),
        updated: DS.attr('date'),
        created: DS.attr('date'),
        deadline: DS.attr('date'),
//         tags: DS.attr('array'),
    });
})(window.App);

