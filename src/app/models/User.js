// Arquivo responsável pela manipulação dos dados dos usuários (criar, alterar ou deletar usuários)

import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    // Chama o método init da classe pai (Model)
    // Enviar as colunas/valores da base de dados (evitar as primaryKeys e as created/updated_at)
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    // Hooks são trechos de código que são executados de forma automática
    // de acordo com uma ação do model ou seja será executado antes de ir para
    // o banco de dados ("beforeSave").
    this.addHook('beforeSave', async user => {
      // gerando hash_password caso o usuário tenha inserido o password
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
