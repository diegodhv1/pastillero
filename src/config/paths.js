const path = require('path');

let Path = {};
// Root folders.
Path.root = path.resolve(`${__dirname}/../../`);
Path.dist = path.join(Path.root, 'dist');
Path.src = path.join(Path.root, 'src');
Path.logs = path.join(Path.root, 'logs');
// Src
Path.config = path.join(Path.src, 'config');
Path.controllers = path.join(Path.src, 'controllers');
Path.middleware = path.join(Path.src, 'middleware');
Path.services = path.join(Path.src, 'services');
Path.routes = path.join(Path.src, 'routes');

export default Path;
