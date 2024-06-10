import "./Cadastros.css";
import axios from "axios";
import { useState, useEffect } from "react";

function Clientes() {
    const [clientes, setClientes] = useState([]);

    function getClientes() {
        axios.get("http://localhost:3000/clientes")
            .then((resposta) => {
                setClientes(resposta.data);
            })
            .catch((error) => {
                console.error('Erro ao buscar clientes:', error);
            });
    }

    useEffect(getClientes, []);

    function getFormulario() {
        return (
            <form>
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="cpf">CPF</label>
                <input type="text" id="cpf" name="cpf" />
                <label htmlFor="telefone">Telefone</label>
                <input type="text" id="telefone" name="telefone" />
                <label htmlFor="email">E-mail</label>
                <input type="text" id="email" name="email" />
                <label htmlFor="dataNascimento">Data de Nascimento</label>
                <input type="text" id="dataNascimento" name="dataNascimento" />
                <button type="submit">Salvar</button>
            </form>
        );
    }

    function getLinha(id, nome, cpf, telefone, email, dataNascimento) {
        return (
            <tr key={id}>
                <td>{id}</td>
                <td>{nome}</td>
                <td>{cpf}</td>
                <td>{telefone}</td>
                <td>{dataNascimento}</td>
                <td>{email}</td>
                <td>
                    <button>Excluir</button>
                    <button>Editar</button>
                </td>
            </tr>
        );
    }

    function getLinhas() {
        return clientes.map(cliente => 
            getLinha(cliente.idCliente, cliente.nome, cliente.cpf, cliente.telefone, cliente.dataNascimento, cliente.email)
        );
    }

    function getTabela() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>CPF</th>
                        <th>TELEFONE</th>
                        <th>EMAIL</th>
                        <th>DATA DE NASCIMENTO</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        );
    }

    return (
        <div>
            <h1>Cadastro de clientes</h1>
            {getFormulario()}
            {getTabela()}
        </div>
    );
}

export default Clientes;
