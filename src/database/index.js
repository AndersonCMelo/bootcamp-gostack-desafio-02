// Cria o Loader para os models

import Sequelize from 'sequelize';

// Importa o arquivo responsável pela manipulação das informações do banco para cada usuário
import User from '../app/models/User';

// Importa o arquivo responsável pela manipulação das informações dos estudantes
import Student from '../app/models/Student';

import databaseConfig from '../config/database';

// Cria um vetor com os models da aplicação
const models = [User, Student];

class Database {
  constructor() {
    this.init();
  }

  // Faz a conexão com a base de dados
  init() {
    this.connection = new Sequelize(databaseConfig);

    // Conecta cada model (User e Student) ao banco de dados
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
