module.exports = {
  development: {
    username: 'postgres',
    password: 'salvation123',
    database: 'kvid_development',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: 'root',
    password: null,
    database: 'kvid_test',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: 'kvid',
    password: 'kvid',
    database: 'kvid_production',
    host: '127.0.0.1',
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    use_env_variable: 'DATABASE_URL',
  },
};
