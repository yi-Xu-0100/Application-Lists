const fs = require('fs');
const path = require('path');

function init(file) {
  if (fs.existsSync(path.resolve(__dirname, file.dist))) fs.unlinkSync(path.resolve(__dirname, file.dist));
  fs.createReadStream(path.resolve(__dirname, file.src)).pipe(fs.createWriteStream(path.resolve(__dirname, file.dist)));
}

files = [
  {
    src: './README.md',
    dist: './docs/README.md',
  },
  {
    src: './LICENSE',
    dist: './docs/LICENSE',
  },
  {
    src: './.docsify/_sidebar.md',
    dist: './docs/_sidebar.md',
  },
  {
    src: './.docsify/index.html',
    dist: './docs/index.html',
  },
  {
    src: './config/README.md',
    dist: './docs/config.md',
  },
  {
    src: './config/office/README.md',
    dist: './docs/office.md',
  },
];
files.forEach((file) => init(file));
