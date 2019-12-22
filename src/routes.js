import { Router } from 'express';
// Coneção entre o front-end e o back-end do body para o banco
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

// Middlewares
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// Rota para cadastro de usuários
routes.post('/users', UserController.store);

// Rota para iniciar uma sessão
routes.post('/sessions', SessionController.store);

// Middleware para autenticação de rotas
routes.use(authMiddleware);

// Rota para atualização de informaççoes do usuário
routes.put('/users', UserController.update);

export default routes;
