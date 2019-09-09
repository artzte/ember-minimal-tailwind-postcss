'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

const postcssImport = require('postcss-easy-import');
const postcssPresetEnv = require('postcss-preset-env');
const postcssNested = require('postcss-nested');
const tailwindcss = require('tailwindcss');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    postcssOptions: {
      compile: {
        enabled: true,
        plugins: [
          { module: postcssImport },
          { module: postcssNested },
          { module: tailwindcss, options: './config/tailwind.js' },
          { module: postcssPresetEnv },
        ],
      },
    },
    nodeAssets: {
      tailwindcss: {
        vendor: ['utilities.css', 'base.css', 'components.css'],
      },
    },
  });

  return app.toTree();
};
