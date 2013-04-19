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

//     $.ajax({
//         url: '/posts',
//         success: function (data) {
//             posts.addObjects(data.map(function (each) {
//                 return Ember.Object.create(each);
//             }));
//         }
//     });
// 
//     App.Post = Ember.Object.create({
//         find: function (arg) {
//             if (arg) {
//                 return posts[arg];
//             }
// 
//             return posts;
//         },
//     });
})(window.App);
