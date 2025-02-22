'use strict';

const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');


const init = async () => {
    const server = new Hapi.server({
        port: 4000,
        host: 'localhost'
    });

    await server.register(Inert);

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: [
                    'public',
                    'tests/qunit'
                ],
                listing: false
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/javascript/{param*}',
        handler: {
            directory: {
                path: [
                    'node_modules/elasticlunr',
                    'node_modules/fuse.js/dist',
                    'node_modules/qunit/qunit'
                ],
                listing: false
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/css/{param*}',
        handler: {
            directory: {
                path: [
                    'node_modules/qunit/qunit'
                ],
                listing: false
            }
        }
    });

    server.route({
        method: 'GET',
        path: '/data/{param*}',
        handler: {
            directory: {
                path: [
                    'data'
                ],
                listing: false
            }
        }
    });

    await server.start();
    console.log('Server started on %s', server.info.uri);;
}




// Kick off the server
init();
