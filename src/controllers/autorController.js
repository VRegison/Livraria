import {Api} from '../services/api';

class AutoresController{
     static async listarAutores(){
        const response = await (await Api.get('/autores')).data;
        console.log(response);
        return response;
    }
    static async cadastrarAutor(nome,nacionalidade){
        const response = await (await Api.post('/autores',{
            nome:nome,
            nacionalidade:nacionalidade
        })).data;
        return response;
    }
}
export default AutoresController;