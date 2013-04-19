(function (App) {
    App.tagsController = Ember.ArrayController.create();
    setTimeout(function () { // XXX why is this race condition happening?
        App.tagsController.set('content', App.Tag.find());
    }, 100);
})(window.App);

