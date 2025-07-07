module.exports = {
    dialect: 'postgres', // informa a ORM q ele deve falar, o dialeto SQL específico do postgres
    host: 'localhost', // indica que o banco esta rodando na msm maquina da aplicação
    port: 5433, // especifica a porta para se conectar com o postgres
    username: 'postgres', // o nome do usuário para a autenticação no banco
    password: 'postgres', // a senha para esse usuário
    database: 'devburger', // o nome do banco ao qual a aplicoção ira se conectar
    define: {
        timestamps: true, //add as colunas createdAt e updateAt, elas são preenchidas com a data e a hr da criação e a ultima att.
        underscored: true, // converte os nomes dos campos para snake_case 
        underscoredAll: true // comverte os nomes das tabelas para snake_case
    }
}

// este arquivo é o "coração" da sua conexão com o banco de dados, ele diz a aplicação qual banco usar, onde ele está e como se
// conectar e se  comportar