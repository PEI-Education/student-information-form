const path = require('path')

module.exports = {
  // Source files
  src: path.resolve(__dirname, '../src'),

  // Production build files
  start: path.resolve(__dirname, '../dist'),
  
  // Production build files
  build: path.resolve(__dirname, '../dist/WEB_ROOT/admin/pei_reports'),

  // Static files that get copied to build folder
  json: path.resolve(__dirname, '../json'),

  // Images that get copied to build folder
  images: path.resolve(__dirname, '../images'),

  // Preferences pages
  prefs: path.resolve(__dirname,  '../prefs'),

  // Handlebars helpers
  helpers: path.resolve(__dirname, '../src/helpers'),

  // Handlebars partials
  partials: path.resolve(__dirname, '../src/partials'),

  // Translations
  messageKeys: path.resolve(__dirname, '../MessageKeys'),
}