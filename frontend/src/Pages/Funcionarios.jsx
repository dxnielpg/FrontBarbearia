import axios from "axios";
import { useState,useEffect } from "react";


function Funcionarios(){

    const [funcionarios, setFuncionario] = useState([]);

    function getFuncionario() {
        axios.get("http://localhost:****/funcionarios")
            .then((resposta) => {
                setFuncionario(resposta.data);
            });
    }

    useEffect(getFuncionario, []);

    function getFormulario() {
        return (
            <form>
                <label for="name">Nome</label>
                <input type="text" id="name" name="name" />
                <label for="cpf">CPF</label>
                <input type="text" id="cpf" name="cpf" multiple />
                <label for="email">Cargo</label>
                <input type="text" id="cargo" name="cargo" />
                <label for="telefone">Telefone</label>
                <input type="text" id="telefone" name="telefone" />
                <label for="dataAdmissao">Data de Admissao</label>
                <input type="text" id="dataAdmissao" name="dataAdmissao" />
                <button>Salvar</button>
            </form>
        );
    }

    function getLinha(id, nome, cpf, cargo, telefone, dataAdmissao) {
        return (
            <tr>
                <td>{id}</td>
                <td>{nome}</td>
                <td>{cpf}</td>
                <td>{cargo}</td>
                <td>{telefone}</td>
                <td>{dataAdmissao}</td>
                <td>
                    <button>Excluir</button>
                    <button>Editar</button>
                </td>
            </tr>
        );
    }

    function getLinhas() {
        const linhasDaTabela = [];
        for (let i = 0; i < funcionarios.length; i++) {
            const funcionario = funcionarios[i];
            linhasDaTabela[i] = getLinha(funcionario.id, funcionario.nome, funcionario.cpf, funcionario.cargo, funcionario.telefone, funcionario.dataAdmissao);
        }
        return linhasDaTabela;
    }

    function getTabela() {
        return (
            <table>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Cargo</th>
                    <th>Telefone</th>
                    <th>Data de Admissao</th>
                    <th>Ações</th>
                </tr>
                {getLinhas()}
            </table>
        );
    }



    return (
        <div>
            {getFormulario()}
            {getTabela()}
        </div>

    );
    
}

export default Funcionarios;