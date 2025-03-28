import { useState } from "react";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Servico } from "../../components/servico";
import "../home/home.css";

export const About = () => {
    const [expandedCard, setExpandedCard] = useState(null);

    const handleCardClick = (nome) => {
        if (expandedCard === nome) {
            setExpandedCard(null);
        } else {
            setExpandedCard(nome);
        }
    };

    return (
        <div className="sobre">
            <Header />
            <div className="legendaserv">
                <h1>
                    Conheça a essência por<br />
                    trás da nossa história
                </h1>
                <p>
                    A Hauz é uma empresa de soluções visuais para o
                    mercado imobiliário e de arquitetura, especializada
                    em imagens 3D de alto padrão de qualidade onde
                    conta com profissionais que atuam na área há mais
                    de 5 anos.
                    <br /><br />
                    Ajudamos arquitetos, construtoras e incorporadoras
                    a criar uma maior conexão entre seus lançamentos
                    e clientes potenciais, visando uma nova forma de
                    interação das pessoas com o projeto e trazendo
                    uma nova experiência para os seus clientes.
                </p>
                <h2>
                    O que fazemos?
                </h2>
            </div>
            <div className="servicos">
                <Servico
                    nomes="Modelagens 3D"
                    legs="Criação de modelos 3D detalhados para o mercado imobiliário."
                    isExpanded={expandedCard === "Modelagem 3D"}
                    onClick={() => handleCardClick("Modelagem 3D")}
                />
                <Servico
                nomes="ambirentação nas imagens"
                legs="Criação de modelos 3D detalhados para o mercado imobiliário."
                isExpanded={expandedCard === "Modelagem 3D"}
                onClick={() => handleCardClick("Modelagem 3D")}
            />
            <Servico
                nomes="Tour 360"
                legs="Criação de modelos 3D detalhados para o mercado imobiliário."
                isExpanded={expandedCard === "Modelagem 3D"}
                onClick={() => handleCardClick("Modelagem 3D")}
            />
            </div>
            <Footer />
        </div>
    );
};
