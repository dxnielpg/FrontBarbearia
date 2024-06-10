import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/clientes">Clientes</NavLink></li>
                <li><NavLink to="/funcionarios">Funcionarios</NavLink></li>
                <li><NavLink to="/servicos">Serviços</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;
