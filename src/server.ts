import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';

import routes from './route';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333);






































//BD - Driver nativo, Query builder, ORM

//Rota = conjunto 
//Recurso = usuário

//Métodos HTTP= GET, POST, PUT, DELETE

//Parâmetros
///Query Params:http://localhost:3333/users?search=diogo
///Route Params:http://localhost:3333/users/1 (identificar um recurso)
///Body: http://localhost:3333/users


//GET = Buscar uma informação(Lista, item)
//POST = Criando uma informação 

//PUT = Editando uma informação
//DELETE = Deletando uma informação