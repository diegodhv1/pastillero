import paths from './paths';
import {
    base,
    development
} from './json-environments/'

let envs;
const env = process.env.NODE_ENV || 'production';
if (env === 'development') {
    envs = Object.assign({}, base, development);
} else if (env === 'testing') {
    envs = Object.assign({}, base, testing);
} else {
    envs = Object.assign({}, base, production);
}

export {
    paths,
    envs,
};
