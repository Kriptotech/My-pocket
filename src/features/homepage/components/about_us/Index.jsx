import style from "./styles.module.css";
import IMG from "./01.jpg";
import { ArrowCircleRight } from "phosphor-react";

export function AboutUs() {
    return (
        <div className={style.container}>
            <div className={style.left} data-aos="fade-right">
                <img src={IMG} alt="" />

                <div className={style.box}>
                    <div>3</div>
                    Anos de Experiencia
                </div>
                <br />
                <p>
                    1.Missão Atender as necessidades dos clientes adoptando
                    todos os segmentos empresariais e contribuir de forma
                    responsável e sustentável para o crescimento das empresas.{" "}
                </p>
                <p>
                    2.Valores • Compromisso com o cliente • Responsabilidade •
                    Transparência • Independência • Integridade • Rigor • Ética
                    Profissional • Excelência • Imparcialidade
                </p>
                <p>
                    3.Visão Ser uma empresa de referência e reconhecida com
                    certificação nacional e internacional baseando-se em padrões
                    de qualidade nas áreas de Consultoria, Tecnologia,
                    Contabilidade, Gestão de Negócios, Serviços Financeiros e
                    Treinamentos.
                </p>
                <p>
                    4.Objectivos No entanto, nosso objetivo é aconselhar e
                    oferecer soluções para todas as necessidades de serviços
                    financeiros de nossos clientes
                </p>
            </div>

            <div className={style.right} data-aos="fade-left">
                <span>SOBRE NÓS</span>
                <h2>
                    Melhor Investimento <span>Flexivel E Seguro</span> Para Ti
                </h2>
                <p>
                    Consultoria para Negócios, Serviços Financeiros e Tecnologia
                    Contratar os serviços da Floatter pode lhe trazer a
                    tranquilidade de saber que você planeou com prudência o seu
                    futuro. Estamos comprometidos em fornecer a você serviços
                    superiores de gerenciamento de patrimônio e suas finanças.
                    Podemos oferecer consultoria e soluções abrangentes desde a
                    tecnologia, contabilidade, gestão de negócios,
                    acompanhamento e monitoria para todas as suas necessidades
                    de planeamento financeiro. Estamos dedicados a colocar seus
                    melhores interesses no concernente ao crescimento do seu
                    dinheiro e ganhos em primeiro lugar. Toda a nossa filosofia
                    de investimento e prestação de serviços aos nossos clientes
                    começa com o nosso princípio fundamental de operar em um
                    ambiente livre de conflitos e seguro. Nossa filosofia de
                    negociação está ancorada na execução precisa e oportuna das
                    solicitações dos clientes, mantendo os mais elevados padrões
                    de transparência, confidencialidade e independência.
                </p>

                <a href="/about">
                    Saiba mais{" "}
                    <ArrowCircleRight color="white" size={20} weight="fill" />
                </a>
            </div>
        </div>
    );
}
