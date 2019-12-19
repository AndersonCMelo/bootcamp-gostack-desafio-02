// Configuração de conexão com o banco de dados
module.exports = {
  dialect: 'postgres',
  host: '192.168.99.100',
  username: 'postgres',
  password: 'gympassword',
  database: 'gympoint',
  port: '5433',
  define: {
    // Atribui a data de criação e edição nas colunas do banco de dados
    timestamps: true,
    // Caixa baixa separada por "_". Exemplo: user_groups
    underscored: true,
    underscoredAll: true,
  },
};
