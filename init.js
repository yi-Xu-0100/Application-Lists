const fs = require('fs');
const path = require('path');

function init(file) {
  if (fs.existsSync(path.resolve(__dirname, file.dist))) fs.unlinkSync(path.resolve(__dirname, file.dist));
  fs.createReadStream(path.resolve(__dirname, file.src)).pipe(fs.createWriteStream(path.resolve(__dirname, file.dist)));
}

files = [
  {
    src: './README.md',
    dist: './server/README.md',
  },
  {
    src: './LICENSE',
    dist: './server/LICENSE',
  },
  {
    src: './.docsify/_sidebar.md',
    dist: './server/_sidebar.md',
  },
  {
    src: './.docsify/index.html',
    dist: './server/index.html',
  },
  {
    src: './config/README.md',
    dist: './server/config.md',
  },
  {
    src: './docs/windows-applications.md',
    dist: './server/windows-applications.md',
  },
  {
    src: './docs/windows-system-reinstallation-applications.md',
    dist: './server/windows-system-reinstallation-applications.md',
  },
  {
    src: './docs/windows-tools.md',
    dist: './server/windows-tools.md',
  },
];

files.forEach((file) => init(file));
