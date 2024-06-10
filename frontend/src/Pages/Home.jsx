import "./Home.css";
function Home() {
    return (
        <>
            <section id="informacoes-basicas" className="tela-informacoes">
                <div className="container">
                    <h2>Informações Básicas</h2>
                    <img src="./Layout/imagens/ANDROMEDA.png" alt="Logo Astro Barbearia" />
                    <p>Localizada no coração da cidade, a Astro Barbearia oferece serviços de barbearia com qualidade e estilo.</p>
                </div>
            </section>

            <section id="servicos" className="tela-servicos">
                <div className="container">
                    <h2>Serviços</h2>
                    <ul>
                        <li>Cortes de Cabelo</li>
                        <li>Barba</li>
                        <li>Tratamentos Capilares</li>
                    </ul>
                </div>
            </section>

            <section id="equipe" className="tela-equipe">
                <div className="container">
                    <h2>Nossa Equipe</h2>
                    <p>Nossa equipe é composta por profissionais experientes e dedicados, prontos para atender nossos clientes com excelência.</p>
                </div>
            </section>

            <section id="depoimentos" className="tela-depoimentos">
                <div className="container">
                    <h2>Depoimentos de Clientes</h2>
                    <blockquote>
                        <p>"A Astro Barbearia é o melhor lugar para cuidar da sua aparência. Ambiente agradável e profissionais competentes!"</p>
                        <footer>João Silva</footer>
                    </blockquote>
                    <blockquote>
                        <p>"Sempre saio satisfeito com o atendimento da equipe da Astro Barbearia. Recomendo a todos!"</p>
                        <footer>Mario Souza</footer>
                    </blockquote>
                </div>
            </section>

            <section id="contato" className="tela-contato">
                <div className="container">
                    <h2>Contatos</h2>
                    <p>Entre em contato conosco para agendar um horário ou tirar suas dúvidas.</p>
                    <p>E-mail: contato@astrobarbearia.com.br</p>
                    <p>Telefone: (41) 91999-1234</p>
                </div>
            </section>

            {/* Seção Localização */}
            <section id="localizacao" className="tela-localizacao">
                <div className="container">
                    <h2>Localização</h2>
                    <p>Nosso endereço: Rua XV de Novembro. 358 - Centro, Curitiba.</p>
                </div>
            </section>
        </>
    );
}

export default Home;
