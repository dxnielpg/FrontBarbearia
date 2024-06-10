import "./Cadastros.css"

import axios from "axios";
import { useState, useEffect } from "react";

function Servicos() {

    const [servicos, setServicos] = useState([]);

    function getServicos() {
        axios.get("http://localhost:****/servicos")
            .then((resposta) => {
                setServicos(resposta.data);
            });
    }

    useEffect(getServicos, []);


function getFormulario() {
    return (
        <form>
            <label for="name">Id Produto</label>
            <input type="text" id="Idproduto" name="IdProduto" />
            <label for="name">Nome</label>
            <input type="text" id="nome" name="nome" multiple />
            <label for="telefone">Validade</label>
            <input type="text" id="validade" name="validade" />
            <label for="email">preco</label>
            <input type="text" id="preco" name="preco" />
            <label for="email">Descricao</label>
            <input type="text" id="descricao" name="descricao" />
            <button>Salvar</button>
        </form>
    );
}


    function getLinha(idServico, nome, duracao, preco, descricao) {
        return (
            <tr>
                <td>{idServico}</td>
                <td>{nome}</td>
                <td>{duracao}</td>
                <td>{preco}</td>
                <td>{descricao}</td>
                <td>
                    <button>Excluir</button>
                    <button>Editar</button>
                </td>
            </tr>
        );
    }

    function getLinhas() {
        const linhasDaTabela = [];
        for (let i = 0; i < servicos.length; i++) {
            const servico = servicos[i];
            linhasDaTabela[i] = getLinha(servico.idServico, servico.nome, servico.duracao, servico.preco, servico.descricao);
        }
        return linhasDaTabela;
    }

    function getTabela() {
        return (
            <table>
                <tr>
                    <th>ID PRODUTOS</th>
                    <th>NOME</th>
                    <th>DURAÇAO</th>
                    <th>PREÇO</th>
                    <th>DESCRICAO</th>
                    <th>Ações</th>
                </tr>
                {getLinhas()}
            </table>
        );
    }




    return (
        <div>
            <h1>CADASTRO DE SERVIÇOS DA BARBEARIA</h1>
            {getFormulario()}
            {getTabela()}
        </div>

    );
}

export default Servicos;


