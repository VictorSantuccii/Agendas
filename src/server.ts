import Fastify from 'fastify';
import { contactsRoutes } from './routes/contact.routes';
import { userRoutes } from './routes/user.routes';
const app = Fastify();

app.register(userRoutes, {
  prefix: '/users',
});
app.register(contactsRoutes, {
  prefix: '/contacts',
});

app.listen({ port: 5000 }, () => {
  console.log('Server listening on port 5000');
});