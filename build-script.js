const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/owd-gallery/runtime.js',
    './dist/owd-gallery/polyfills.js',
    './dist/owd-gallery/scripts.js',
    './dist/owd-gallery/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/owd-gallery.js');
  await fs.copyFile(
    './dist/owd-gallery/styles.css',
    'elements/styles.css'
  );
})();