module.exports = function(grunt) {
    grunt.initConfig({
        bowerful: {
            dist: {
                /**
                    store (optional) -> path where components are installed. defaults
                    to 'components'
                */

                store: 'components',

                /**
                    dest (optional) -> directory where files will be merged. Merged
                    files take the form:

                        assets[.extension] = { merged files of extension type }

                    e.g. all JS from bower packages will end up in assets.js; all css in assets.css

                    Files are merged according to dependency rules, such that a file is
                    concatenated after files upon which it depends.
                */

                dest: 'public',

                /**
                    destfile (optional) -> filename that will be used when files are merged. Merged
                    files will default to 'assets' 
                */

                destfile: 'assets',

                /**
                    customtarget (optional) -> file targets can be manually specified. 

                    string - fullpath string without any extenstion, this will be added automaticly.

                    key/value pairs. - fullpath string with extensions, extensions can be overwritten. 
                    eg: Changing ext to something else, example '.less' or '.scss' 
                */

                /**
                    @packages (required) -> object of `package name: package version`
                    key/value pairs. Version can be left blank.
                */

                packages: {
                    bootstrap: '~2.2.1',
                    jquery: '',
                    ember: '~1.0.0-pre.2'
                }
            }
        },

        ember_templates: {
            compile: {
                options: {
                    templateName: function(sourceFile) {
                        return require('path').basename(sourceFile);
                    },
                },

                files: {
                  'public/templates.js': [ 'client/lib/templates/**.handlebars' ]
                }
            }
        },

        copy: {
            main: {
                files: [
                  { src: [ 'client/static/**'], dest:
                    'public/', flatten: true, expand: true, filter: 'isFile' }, // includes files in path
                ]
            }
        },

        concat: {
            dist: {
            src: [ 'client/lib/application.js' ],
            dest: 'public/application.js'
        },
    }
    });

    grunt.loadNpmTasks('grunt-bowerful');
    grunt.loadNpmTasks('grunt-ember-templates');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
};
