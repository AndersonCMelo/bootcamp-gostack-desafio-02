// Arquivo responsável pela manipulação dos dados dos estudantes (criar, alterar ou deletar usuários)

import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        age: Sequelize.STRING,
        weight: Sequelize.STRING,
        height: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Student;
