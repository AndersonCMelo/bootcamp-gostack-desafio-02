// Arquivo responsável pela manipulação dos dados dos usuários (criar, alterar ou deletar usuários)

import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    // Chama o método init da classe pai (Model)
    // Enviar as colunas/valores da base de dados (evitar as primaryKeys e as created/updated_at)
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default User;
