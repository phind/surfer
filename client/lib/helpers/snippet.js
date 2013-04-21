Ember.Handlebars.registerBoundHelper('snippet', function (context) {
    return new
        Handlebars.SafeString(markdown.toHTML(context).paragraphs().slice(0,
                3).join('\n'));
});

