Ember.Handlebars.registerBoundHelper('markdown', function (context) {
    return new Handlebars.SafeString(markdown.toHTML(context));
});

