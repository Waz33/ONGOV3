const express = require('express'); //Importa pacote
const cors = require('cors');
const routes = require('./routes'); // Importa Arquivo

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


//Rota / recurso

//Metodos HTTP
    //GET - busca uma rota no backend
    //POST - Enviar/Criar no backend
    //PUT - Altera
    //DELETE - Deleta

//Tipos de parametros
    //Query Params:  parametros nomeados enviados na rota apos "?" (Filtros, Paginacao)
    //Route Params: Parametros utilizados para identificar recursos
    //Request Body: Corpo da requisicao utilizado para criar ou alterar recursos

//Banco de dados:
    //SQL: MySql, SQlite, Postgree, Oracle, SQ Server
    //NoSQ: MongoDB, CouchDB, etc
    
    //Driver: Select* from users
    //QueryBuilder: Knex = queryBuilder em javascript que permite fazer query em js table('users').select('*').where()



//Escuta a porta 3333
app.listen(3333);
