import "./Cadastros.css";
import axios from "axios";
import { useState, useEffect } from "react";

function Clientes() {
    const [clientes, setClientes] = useState([]);
    const [clienteAtual, setClienteAtual] = useState({
        idCliente: null,
        nome: "",
        cpf: "",
        telefone: "",
        email: "",
        dataNascimento: ""
    });

    function getClientes() {
        axios.get("http://localhost:5103/clientes")
            .then((resposta) => {
                setClientes(resposta.data);
            })
            .catch((error) => {
                console.error('Erro ao buscar clientes:', error);
            });
    }

    useEffect(getClientes, []);

    function handleInputChange(event) {
        const { name, value } = event.target;
        setClienteAtual({ ...clienteAtual, [name]: value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Cliente atual antes do submit:", clienteAtual); // Log para ver os dados antes do submit

        if (clienteAtual.idCliente === null) {
           
            axios.post("http://localhost:5103/clientes", clienteAtual)
                .then((response) => {
                    console.log("Resposta do POST:", response.data);
                    getClientes();
                    setClienteAtual({
                        idCliente: null,
                        nome: "",
                        cpf: "",
                        telefone: "",
                        email: "",
                        dataNascimento: ""
                    });
                })
                .catch((error) => {
                    console.error('Erro ao adicionar cliente:', error);
                });
        } else {
            
            axios.put(`http://localhost:5103/clientes/${clienteAtual.idCliente}`, clienteAtual)
                .then((response) => {
                    console.log("Resposta do PUT:", response.data);
                    getClientes();
                    setClienteAtual({
                        idCliente: null,
                        nome: "",
                        cpf: "",
                        telefone: "",
                        email: "",
                        dataNascimento: ""
                    });
                })
                .catch((error) => {
                    console.error('Erro ao editar cliente:', error);
                });
        }
    }

    function handleEdit(cliente) {
        console.log("Editando cliente:", cliente);
        setClienteAtual(cliente);
    }

    function handleDelete(id) {
        axios.delete(`http://localhost:5103/clientes/${id}`)
            .then((response) => {
                console.log("Resposta do DELETE:", response.data);
                getClientes();
            })
            .catch((error) => {
                console.error('Erro ao excluir cliente:', error);
            });
    }

    function getFormulario() {
        return (
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" name="nome" value={clienteAtual.nome} onChange={handleInputChange} />
                <label htmlFor="cpf">CPF</label>
                <input type="text" id="cpf" name="cpf" value={clienteAtual.cpf} onChange={handleInputChange} />
                <label htmlFor="telefone">Telefone</label>
                <input type="text" id="telefone" name="telefone" value={clienteAtual.telefone} onChange={handleInputChange} />
                <label htmlFor="email">E-mail</label>
                <input type="text" id="email" name="email" value={clienteAtual.email} onChange={handleInputChange} />
                <label htmlFor="dataNascimento">Data de Nascimento</label>
                <input type="text" id="dataNascimento" name="dataNascimento" value={clienteAtual.dataNascimento} onChange={handleInputChange} />
                <button type="submit">{clienteAtual.idCliente ? "Atualizar" : "Salvar"}</button>
            </form>
        );
    }

    function getLinha(cliente) {
        return (
            <tr key={cliente.idCliente}>
                <td>{cliente.idCliente}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.cpf}</td>
                <td>{cliente.telefone}</td>
                <td>{cliente.dataNascimento}</td>
                <td>{cliente.email}</td>
                <td>
                    <button onClick={() => handleEdit(cliente)}>Editar</button>
                    <button onClick={() => handleDelete(cliente.idCliente)}>Excluir</button>
                </td>
            </tr>
        );
    }

    function getLinhas() {
        return clientes.map(cliente => getLinha(cliente));
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
