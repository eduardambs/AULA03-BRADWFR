import pessoa from './pessoa.js'; // para exportação default podemos personalizar a importação 
import pes from './pessoa.js';

// obrigatório utilizar o nome atribuida na exportação
import { limpar } from './util.js';
import { baseDados } from './util.js';

// ou
// import { limpar, baseDados } from './util.js';

class Pessoa {
    constructor () {
        this.nome = "Maria Eduarda";
        this.sobrenome = "Barbosa";
    }

    imprimirNome() {
        console.log(this.nome, " ", thi.sobrenome);
    }
}

novapessoa = new Pessoa();
novapessoa.imprimirNome(); 
