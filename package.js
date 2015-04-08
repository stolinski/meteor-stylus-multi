Package.describe({
  summary: 'Stylus, packaged with Nib, Lost, Rupture, and Axis',
  version: '1.2.5',
  name: 'stolinski:stylus-multi',
  git: 'https://github.com/stolinski/meteor-stylus-multi.git'
});

Package._transitional_registerBuildPlugin({
  name: 'stolinski:stylus-multi',
  sources: [
    'plugin/compile-stylus.js'
  ],
  npmDependencies: {
    stylus: '0.50.0',
    'autoprefixer-stylus': '0.5.0',
    jeet: '6.1.2',
    rupture: '0.6.1',
    axis: '0.3.0',
    'lost-grid': '5.1.2'
  }
});

Package.onTest(function(api) {
  api.use([
    'cryptoquick:stylus-multi',
    'tinytest',
    'test-helpers',
    'templating'
  ]);
  api.add_files([
    'stylus-multi_tests.styl',
    'stylus-multi_test_import_only.styl',
    'stylus-multi_test_import.styl',
    'stylus-multi_tests.html',
    'stylus-multi_tests.js'
  ], 'client');
});
