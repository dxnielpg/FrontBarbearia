import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout"
import Home from "./Pages/Home"
import Clientes from "./Pages/Clientes";
import Servicos from "./Pages/Servicos";
import Funcionarios from "./Pages/Funcionarios";

function App() {
    return (
    <>
    <Routes>
    <Route path="/" element={<Layout><Home/></Layout>} />
    <Route path="/clientes" element={<Layout><Clientes/></Layout>} />
    <Route path="/funcionarios" element={<Layout><Funcionarios/></Layout>} />
    <Route path="/servicos" element={<Layout><Servicos/></Layout>} />
    </Routes>
    </>
    );
    }
export default App;
