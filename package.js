Package.describe({
  name: "qinghai:autoform",
  git:"https://github.com/noteon/meteor-autoform",
  version:"0.5.1",
  summary: "Migrate from Meteor 0.8."
});

Package.on_use(function(api) {
  api.use(['underscore@1.0.1', 'deps@1.0.5', 'templating@1.0.8', 'handlebars@1.0.1', 'momentjs:moment@2.10.6', 'ui@1.0.4'], 'client');
  api.use('reload@1.1.1', 'client', {weak: true});
  api.use('qinghai:collection2@0.3.11_1', ['client', 'server'], {weak: true});
  api.use('qinghai:simple-schema@0.2.45_1', ['client', 'server']);

  if (typeof api.export !== 'undefined') {
    api.use('livedata@1.0.11', 'client');
    api.imply('qinghai:simple-schema@0.2.45_1', 'client');
    api.export('AutoForm', 'client');
    api.export('Utility', 'client', {testOnly: true});
  }

  api.add_files([
    // bootstrap3 Template
    'templates/bootstrap3/bootstrap3.html',
    'templates/bootstrap3/bootstrap3.js',
    // bootstrap3-span Template
    'templates/bootstrap3-span/bootstrap3-span.html',
    'templates/bootstrap3-span/bootstrap3-span.js',
    // plain Template
    'templates/plain/plain.html',
    'templates/plain/plain.js',
    // plain-span Template
    'templates/plain-span/plain-span.html',
    'templates/plain-span/plain-span.js',
    // Core Files
    'autoform.html',
    'utility.js',
    'form-preserve.js',
    'hooks.js',
    'autoform.js'
  ], 'client');
});

Package.on_test(function (api) {
  api.use(['qinghai:autoform', 'tinytest', 'underscore']);
  api.add_files('tests/utility-tests.js');
  api.add_files('tests/autoform-tests.js');
});
