import {Api} from '../services/api';

class LivrosController{
     static async ListarFilmes(){
        const response = await (await Api.get('/livros')).data;
        console.log(response);
        return response;
    }
}
export default LivrosController;