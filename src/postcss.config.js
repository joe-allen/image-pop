const purge = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    cssnano({
      preset: 'default',
    }),
    purge({
      content: ['./src/*.html', './src/js/components/*.js'],
      css: ['./src/scss/components/imagePop.scss'],
    }),
    autoprefixer
  ],
}