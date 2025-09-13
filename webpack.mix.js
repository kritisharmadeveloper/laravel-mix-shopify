const mix = require('laravel-mix');
const minifier = require('minifier');

mix.setPublicPath('assets');
mix.options({
   fileLoaderDirs:  {
       fonts: './'
   }
});

// TypeScript and JavaScript compilation
mix.ts('src/js/frontend.ts', 'assets')
   .vue({
      version: 3,
   });

// SCSS compilation with minification
mix.sass('src/scss/frontend.scss', 'frontend.min.css')
   .sass('src/scss/frontend-vendor.scss', 'frontend-vendor.min.css');
   
// Copy fonts from src to assets
mix.copy('src/fonts', 'assets/fonts');

mix.then(() => {
   // Minify CSS files
   minifier.minify('assets/frontend.min.css'); 
   minifier.minify('assets/frontend-vendor.min.css');
});