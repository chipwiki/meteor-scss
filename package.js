Package.describe({
  summary: 'Style with attitude. Sass and SCSS support for Meteor.js (with autoprefixer and sourcemaps).',
  version: "3.2.0",
  git: "https://github.com/karfield/meteor-scss.git",
  name: "karfield:scss"
});

Package.registerBuildPlugin({
  name: 'compileScss',
  use: [],
  sources: [
    'plugin/compile-scss.js'
  ],
  npmDependencies: {
    'node-sass': '3.2.0',
    'lodash': '2.4.1',
    'autoprefixer-core': '5.1.4',
  }
});

Package.on_test(function (api) {
  api.use(['test-helpers',
           'tinytest',
           'jquery',
           'templating']);
  api.use(['fourseven:scss']);
  api.add_files(['test/scss_tests.html', 'test/scss_tests.js'], 'client');
  api.add_files(['test/scss_tests.scss'], 'client',  {
    testOptions: {
      enableAutoprefixer: true,
      autoprefixerOptions: {
        // In order to force autoprefixer to actually add the prefixed
        // -webkit-transition css rule, it is necessary to enforce rule
        // generation for all outdated browsers.
        browsers: ['> 0%']
      }
    }
  });
});
