Package.describe({
  summary: 'Wrapper for Raphael.js'
});

Package.on_use(function(api) {
  api.use(['jquery']);
  api.add_files(['raphael.js'], ['client']);
  api.export('Raphael', 'client');
});