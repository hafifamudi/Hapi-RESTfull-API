import hapi from '@hapi/hapi';
import routes from './routes';

const init = async () => {
  const server = hapi.server({
    port: 5000,
    host: 'localhost',
  });

  server.route(routes);

  await server.start();
  console.log(`server sudah berjalan pada ${server.info.uri}`);
};

init();
