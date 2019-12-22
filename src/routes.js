import { Router } from 'express';
// Coneção entre o front-end e o back-end do body para o banco
import UserController from './app/controllers/UserController';
import StudentController from './app/controllers/StudentController';
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

// Rota para atualização de informações do usuário
routes.put('/users', UserController.update);

// Rota para cadastro de estudantes
routes.post('/students', StudentController.store);

// Rota para atualização de informações de estudantes
routes.put('/students', StudentController.update);

export default routes;
